import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, setTotalUsersCountAC, toggleIsFetchingAC } from "../Redux/UsersReducer";
import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader";
export class UsersConnectApi extends React.Component {
    componentDidMount(){
      this.props.toggleIsFetching(true);
        axios
          .get(`http://localhost:3001/api/v1/users=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
          });
    }
     onPageChanged(pageNumber){
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
          .get(`http://localhost:3001/api/v1/users=${pageNumber}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalUsersCount);
            this.props.toggleIsFetching(false)
          });
     }
    render() {
      return (<>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             users={this.props.users}
             follow={this.props.follow}
             unfollow={this.props.unfollow}
             isFetching={this.props.isFetching}/>
             </>)
    }
  }
  
  
  
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData,
        pageSize : state.usersPage.pageSize,
        totalUsersCount : state.usersPage.totalUsersCount,
        currentPage : state.usersPage.currentPage,
        isFetching : state.usersPage.isFetching
    }
};

    export default connect(mapStateToProps, {
      follow:followAC,
      unfollow:unfollowAC,
      setUsers:setUsersAC,
      setCurrentPage: setCurrentPageAC,
      setTotalUsersCount:setTotalUsersCountAC,
      toggleIsFetching: toggleIsFetchingAC
      })(UsersConnectApi);
    