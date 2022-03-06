import React from "react";
import d from './Users.module.css';
import axios from "axios";
import img from '../../img/user.png';

class Users extends React.Component {

    componentDidMount() {

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
            this.props.totalCountUsers = response.data.totalCount;
        });
    }

    render() {
        let countUsers = Math.ceil(this.props.totalCountUsers / this.props.pageSize);
        let pages = [];
        for (let i=1;i<countUsers;i++){
            pages.push(i);
        };

        let pagesMap = pages.map(s=> <span
            className= { this.props.currentPage == s && d.test}
            onClick={(e)=> this.onPageChanged(s)}>{s}</span>)
        return <div>
            <div>
                {pagesMap}
            </div>
            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                 <div>
                    <img src={u.photos.small != null ? u.photos.small : img} alt='image'/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => this.props.changeUnFollowedUser(u.id)}>unfollow</button> :
                    <button onClick={() => this.props.changeFollowedUser(u.id)}>follow</button>}
                </div>
                </span>
                <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                </span>
                <span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;