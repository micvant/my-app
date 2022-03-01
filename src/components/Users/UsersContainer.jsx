import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, unfollowAC} from '../../Data/users-reducer';

let  mapStateToProps = (state) => {
    return {
        users : state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollowedUser : () => {
            let action = followAC();
            dispatch(action);},
        changeUnFollowedUser : () => {
            let action = unfollowAC();
            dispatch(action);
        }
    };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;