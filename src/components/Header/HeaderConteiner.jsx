import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import axios from "axios";
import { setUserData} from "../../Data/auth-reducer";

class HeaderConteiner extends React.Component {

    componentDidMount() {
        let path = 'https://social-network.samuraijs.com/api/1.0/auth/me';
        axios.get(path, {withCredentials:true}).then((response)=>{
            if(response.data.resultCode === 0){
                let {login, email, id} = {...response.data.data};
                this.props.setUserData(login, email, id);
            }
            }
        )
    }

    render() {
        return <>
            <Header {...this.props}/>
            </>;
    }
}

let mapStateToProps= (state) =>{
    return {login : state.authPage.login,
        isAuth : state.authPage.isAuth}
}

export default connect(mapStateToProps,{setUserData})(HeaderConteiner);