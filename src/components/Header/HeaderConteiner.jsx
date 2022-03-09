import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import { setUserData} from "../../Data/auth-reducer";
import {authMe} from "../../API/API";

class HeaderConteiner extends React.Component {

    componentDidMount() {
        authMe().then((data)=>{
            if(data.resultCode === 0){
                let {login, email, id} = {...data.data};
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