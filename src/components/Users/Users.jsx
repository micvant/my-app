import React from "react";
import './Users.module.css';


let Users = (props) => {

    let arrayUsers = props.users.map(u => <div key={u.id}>
        <span>
            <div><img src={u.pathImg}/></div>
            <div>{ u.followed ? <button onClick={() => props.changeUnFollowedUser(u.id)}>unfollow</button> : <button onClick={() => props.changeFollowedUser(u.id)}>follow</button>}</div>
        </span>
        <span>
            <span>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.city}</div>
                <div>{u.location.country}</div>
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