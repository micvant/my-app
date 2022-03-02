import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from '../../Data/users-reducer';

let  mapStateToProps = (state) => {
    return {
        users : state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollowedUser : (userID) => {
            let action = followAC(userID);
            dispatch(action);},
        changeUnFollowedUser : (userID) => {
            let action = unfollowAC(userID);
            dispatch(action);
        },
        setUsers : (users) => {
            let action = setUsersAC(users);
            dispatch(action);
        }
    };
};

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;