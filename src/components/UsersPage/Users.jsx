import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../Images/icon-256x256.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  // let pages = [];
 
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }
 

  // for(let i=1;i<=pagesCount;i++){
  //   pages.push(i)
  // };
  if (props.loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <NavLink to={'/usersProfile'} >
          <div>{u.fullname}</div>
          </NavLink>
          <div>{u.status}</div>
          <img src={u.image_url}/>
        </div>
      ))}
    </div>
  );
};

export default Users;
