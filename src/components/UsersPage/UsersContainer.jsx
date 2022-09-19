import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC } from "../Redux/UsersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";

export class UsersConnectApi extends React.Component {
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
            this.props.setTotalUsersCount(response.data.totalUsersCount);
          });
     }
    render() {
      let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
      let pages = [];
      for(let i=1;i<=pagesCount;i++){
        pages.push(i)
      };
     
      return (
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}/>)
    
    }
  }
  
  
  
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch) => {
        return {
            follow: (userId) => {
                dispatch(followAC(userId))
            },
            unfollow: (userId) => {
                dispatch(unfollowAC(userId))
            },
            setUsers: (users) => {
                dispatch(setUsersAC(users))
            },
            setCurrentPage: (pageNumber) =>{
                dispatch(setCurrentPageAC(pageNumber))
            },
            setTotalUsersCount: (totalUsersCount) =>{
                dispatch(setTotalUsersCountAC(totalUsersCount))
            }
        }
    }





    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersConnectApi);
    export default UsersContainer;