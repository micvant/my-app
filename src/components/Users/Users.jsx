import img from "../../img/user.png";
import React from "react";
import d from "./Users.module.css";
import {NavLink} from "react-router-dom";
import {follow, unFollow} from "../../API/API";

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
                        <img className={d.avatar} src={u.photos.small != null ? u.photos.small : img} alt='images'/>
                    </NavLink>
                </div>
                <div>
                      {u.followed ? <button onClick={() => {
                              unFollow(u.id).then(data => {
                                  if(data.resultCode === 0){
                                      props.unfollow(u.id);
                                  }
                              })
                          }}>unfollow</button> :
                          <button onClick={() => {
                              follow(u.id).then(data => {
                                  if(data.resultCode === 0){
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
