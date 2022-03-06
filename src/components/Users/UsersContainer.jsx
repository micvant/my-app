import React from "react";
import {connect} from "react-redux";
import {followAC, setCurrentPagesAC, setTotalCountAC, setUsersAC, unfollowAC} from '../../Data/users-reducer';
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        debugger;
        let path = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`;
        axios.get(path).then(response => {
            this.props.setUsers(response.data.items);

            this.props.setTotalCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPages(pageNumber);
        let path = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
        axios.get(path).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount( response.data.totalCount);
        });
    }

    render() {
        return <Users
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalCountUsers={this.props.totalCountUsers}
        />;
    }
}


let  mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage : state.usersPage.currentPage
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
        },
        setCurrentPages : (currentPage) =>{
            let action = setCurrentPagesAC(currentPage);
            dispatch(action);
        },
        setTotalCount : (totalCount) =>{
            let action = setTotalCountAC(totalCount);
            dispatch(action);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);