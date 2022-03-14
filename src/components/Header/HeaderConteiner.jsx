import React from "react";
import {connect} from "react-redux";
import Header from "./Header";
import { authMeThunk} from "../../Data/auth-reducer";

class HeaderConteiner extends React.Component {

    componentDidMount() {
        this.props.authMeThunk();
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

export default connect(mapStateToProps,{authMeThunk})(HeaderConteiner);