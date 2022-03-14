import img from "../../img/user.png";
import React from "react";
import d from "./Users.module.css";
import {NavLink} from "react-router-dom";

let Users = (props) => {

    let countUsers = Math.ceil(props.totalCountUsers / props.pageSize);

    let pages = [];

    for (let i = 1; i < countUsers; i++) {
        pages.push(i);
    }

    let pagesMap = pages.map(s => <span
        key={s}
        className={props.currentPage === s ? d.test : ''}
        onClick={(e) => props.onPageChanged(s)}>{s}</span>)

    return (
        <div>
            <div>
                {pagesMap}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                <span>
                 <div>
                     <NavLink to={/profile/ + u.id}>
                        <img className={d.avatar} src={u.photos.small != null ? u.photos.small : img} alt='images'/>
                    </NavLink>
                </div>
                <div>
                      {u.followed ? <button disabled={props.fetchingUsers.some(id => id === u.id)} onClick={() => {
                              props.setUnFollow(u.id)
                          }}>unfollow</button> :
                          <button disabled={props.fetchingUsers.some(id => id === u.id)} onClick={() => {
                              props.setFollow(u.id)
                          }
                          }>follow</button>}
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
