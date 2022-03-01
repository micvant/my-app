import React from "react";
import './Users.module.css';

let Users = (props) => {

    let arrayUsers = props.users.map(u => <div key={u.id}>{u.fullName}</div>);
    return (
        <div>
            {arrayUsers}
        </div>
    );
};

export default Users;