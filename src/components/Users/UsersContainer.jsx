import React from "react";
import {connect} from "react-redux";
import {
    getUsersThunk,
    setFetchingsUsers, setFollowThunk, setUnFollowThunk,
} from '../../Data/users-reducer';
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            <Preloader isFetching={this.props.isFetching} />
            <Users
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            totalCountUsers={this.props.totalCountUsers}
            fetchingUsers = {this.props.fetchingUsers}
            setFetchingsUsers ={this.props.setFetchingsUsers}
            setFollow = {this.props.setFollowThunk}
            setUnFollow = {this.props.setUnFollowThunk}
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
        isFetching: state.usersPage.isFetching,
        fetchingUsers : state.usersPage.fetchingUsers,
    };
};


export default connect(mapStateToProps,
    {
        setFetchingsUsers , getUsersThunk, setFollowThunk, setUnFollowThunk}
    )(UsersContainer);