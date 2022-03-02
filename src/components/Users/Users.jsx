import React from "react";
import './Users.module.css';
import axios from "axios";
import img from '../../img/user.png';

let Users = (props) => {

    if(props.users.length == 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items);
        });
    };

    let arrayUsers = props.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small != null ? u.photos.small : img} alt='image'/>
            </div>
            <div>
                { u.followed ? <button onClick={() => props.changeUnFollowedUser(u.id)}>unfollow</button> : <button onClick={() => props.changeFollowedUser(u.id)}>follow</button>}
            </div>
        </span>
        <span>
            <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </span>
            <span>


            </span>
        </span>
    </div>);
    return (
        <div>
            {arrayUsers}
        </div>
    );
};

export default Users;