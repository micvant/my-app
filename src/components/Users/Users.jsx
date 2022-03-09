import img from "../../img/user.png";
import React from "react";
import d from "./Users.module.css";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {
    
    let countUsers = Math.ceil(props.totalCountUsers / props.pageSize);

    let pages = [];

    for (let i=1;i<countUsers;i++){
        pages.push(i);
    }

    let pagesMap = pages.map(s=> <span
        key={s}
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
                     <NavLink to={/profile/ + u.id}>
                        <img className={d.avatar} src={u.photos.small != null ? u.photos.small : img} alt='image'/>
                    </NavLink>
                </div>
                <div>
                      {u.followed ? <button onClick={() => {
                              let path = `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`;
                              axios.delete(path, {withCredentials : true, headers : {"API-KEY" : "2a002c6d-6f0a-4332-a99c-a9da24817eaa"}}).then(response => {
                                  if(response.data.resultCode === 0){
                                      props.unfollow(u.id);
                                  }
                              })
                          }}>unfollow</button> :
                          <button onClick={() => {
                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials : true, headers : {"API-KEY" : "2a002c6d-6f0a-4332-a99c-a9da24817eaa"}}).then(response => {
                                  if(response.data.resultCode === 0){
                                      props.follow(u.id);
                                  }
                              })
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
