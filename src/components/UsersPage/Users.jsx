import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../Images/icon-256x256.png";

class Users extends React.Component {
  componentDidMount(){
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }

  render() {
    return (
      <div>
        <div>
        <span className={classes.selectedPage}>1</span>
        <span className={classes.selectedPage}>2</span>
        <span className={classes.selectedPage}>3</span>
        <span className={classes.selectedPage}>4</span>
        <span className={classes.selectedPage}>5</span>
        </div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <div>
              <img
                alt=""
                src={null ? userPhoto : u.avatar}
                className={classes.avatar}
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    this.props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    this.props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
            <div>{u.name}</div>
            <div>{u.status}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
