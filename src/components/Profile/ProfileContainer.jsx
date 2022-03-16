import React, {useEffect} from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunk, setUsersProfile, getStatusThunk} from "../../Data/profile-reducer";
import {useMatch} from "react-router";
import {WithAuthNavigate} from "../../hoc/WithAuthNavigate";
import {compose} from "redux";

let ProfileContainerHook = (props) => {

    useEffect(()=>{
        let userId = props.match ? props.match.params.userId : '22692';
        props.getProfileThunk(userId);
        props.getStatusThunk(userId);
    });

    return (
        <>
            <Profile {...props} status={props.status} profile={props.profile}/>
        </>
    )
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId/");
    return (
        <ProfileContainerHook {...props} match={match} getProfileThunk={props.getProfileThunk} getStatusThunk={props.getStatusThunk}/>
       // <ProfileContainer {...props} match={match} getProfileThunk={props.getProfileThunk} getStatusThunk={props.getStatusThunk}/>
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapStateToProps, {setUsersProfile, getProfileThunk, getStatusThunk}),
    WithAuthNavigate
)(ProfileMatch);
