import React from "react";
import './Users.module.css';
import axios from "axios";
import img from '../../img/user.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    }

    render() {
        return <div>
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