import {Navigate} from 'react-router-dom';
import {connect} from "react-redux";

let mapStateToPropsnavigate = (state) => ({
    isAuth: state.authPage.isAuth
});

export const WithAuthNavigate = (Component) =>{
    let NavigateComponent = (props) =>{
        if(!props.isAuth){return <Navigate to={'/login/*'}/>}
        return <Component {...props}/>
    }

    return connect(mapStateToPropsnavigate)(NavigateComponent);
}