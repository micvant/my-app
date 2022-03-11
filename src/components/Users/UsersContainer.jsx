import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPages,
    setFetching, setFetchingsUsers,
    setTotalCount,
    setUsers,
    unfollow
} from '../../Data/users-reducer';
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {getUsers} from "../../API/API";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true);
       getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
            this.props.setFetching(false);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setFetching(true);
        this.props.setCurrentPages(pageNumber);
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setTotalCount( data.totalCount);
            this.props.setFetching(false);
        });
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
    {follow, unfollow, setUsers, setCurrentPages, setTotalCount, setFetching, setFetchingsUsers}
    )(UsersContainer);