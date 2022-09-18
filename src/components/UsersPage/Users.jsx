import axios from "axios";
import React from "react";
import classes from "./Users.module.css";
import userPhoto from "./../../Images/icon-256x256.png";

class Users extends React.Component {
  componentDidMount(){
      axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
  }
   onPageChanged(pageNumber){
    this.props.setCurrentPage(pageNumber);
    axios
        .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
   }
  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages = [];
    for(let i=1;i<=pagesCount;i++){
      pages.push(i)
    };
   
    return (<div>
         {pages.map(p=>{
           return <button className={(this.props.currentPage === p)?classes.selectedPage:classes.otherPages} onClick = {()=>{this.onPageChanged(p)}}>{p}</button>
           
         })}
        
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
