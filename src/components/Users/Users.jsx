import img from "../../img/user.png";
import React from "react";
import d from "./Users.module.css";

let Users = (props) => {

    let countUsers = Math.ceil(props.totalCountUsers / props.pageSize);

    let pages = [];

    for (let i=1;i<countUsers;i++){
        pages.push(i);
    }

    let pagesMap = pages.map(s=> <span
        className= { props.currentPage === s && d.test}
        onClick={(e)=> props.onPageChanged(s)}>{s}</span>)

    return (
    <div>
        <div>
            {pagesMap}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                 <div>
                    <img src={u.photos.small != null ? u.photos.small : img} alt='image'/>
                </div>
                <div>
                    {u.followed ? <button onClick={() => props.changeUnFollowedUser(u.id)}>unfollow</button> :
                        <button onClick={() => props.changeFollowedUser(u.id)}>follow</button>}
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
)
}

export default Users;
