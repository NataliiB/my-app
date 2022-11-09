import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../Images/icon-256x256.png";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  console.log(props);
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }
  return;
  <div>
    {props.users.usersData.map((u) => (
      <div key={u.id}>
        {" "}
        {/* <div>
          <NavLink to={"/profile/" + u.id}>
            <img
              alt=""
              src={null ? userPhoto : u.avatar}
              className={classes.avatar}
            />
          </NavLink>
        </div>{" "} */}
        
        {/* <div>
          {u.followed ? (
            <button
              onClick={() => {
                props.unfollow(u.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(u.id);
              }}
            >
              Follow
            </button>
          )}
        </div> */}
        <div>{u.fullname}</div>
        <div>{u.status}</div>
      </div>
    ))}
  </div>;
};

export default Users;
