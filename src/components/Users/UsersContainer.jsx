import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setFetching,
    setTotalCount,
    setUsers,
    unfollow
} from '../../Data/users-reducer';
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
        let path = `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}`;
        axios.get(path).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
            this.props.setFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPages(pageNumber);
        let path = `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`;
        axios.get(path).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalCount( response.data.totalCount);
            this.props.setFetching(false);
        });
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching} />
            <Users
            users={this.props.users}
            changeFollowedUser={this.props.changeFollowedUser}
            changeUnFollowedUser={this.props.changeUnFollowedUser}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalCountUsers={this.props.totalCountUsers}
        />
        </>;
    }
}

let  mapStateToProps = (state) => {
    return {
        users : state.usersPage.users,
        pageSize : state.usersPage.pageSize,
        totalCountUsers: state.usersPage.totalCountUsers,
        currentPage : state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         // changeFollowedUser : (userID) => {
//         //     let action = followAC(userID);
//         //     dispatch(action);},
//         // changeUnFollowedUser : (userID) => {
//         //     let action = unfollowAC(userID);
//         //     dispatch(action);
//         // },
//         // setUsers : (users) => {
//         //     let action = setUsersAC(users);
//         //     dispatch(action);
//         // },
//         // setCurrentPages : (currentPage) =>{
//         //     let action = setCurrentPages(currentPage);
//         //     dispatch(action);
//         // },
//         setTotalCount : (totalCount) =>{
//             let action = setTotalCountAC(totalCount);
//             dispatch(action);
//         },
//         setFetching : (isFetching) => {
//             let action = setFetchingAC(isFetching);
//             dispatch(action);
//         }
//     };
// };

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPages, setTotalCount, setFetching}
    )(UsersContainer);