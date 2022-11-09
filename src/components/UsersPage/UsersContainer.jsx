import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow, setTotalUsersCount, toggleIsFetching } from "../Redux/UsersReducer";
import * as axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "../Common/Preloader";
export class UsersConnectApi extends React.Component {
    componentDidMount(){
      this.props.toggleIsFetching(true);
        axios
        .get(`http://localhost:3001/api/v1/users`)
          .get(`http://localhost:3001/api/v1/users=${this.props.currentPage}&count=${this.props.pageSize}`)
          .then((response) => {
            this.props.toggleIsFetching(false);
            this.props.setTotalUsersCount(response.data.totalUsersCount);
            this.props.setUsers(response.data.usersData);
            console.log(response.data.usersData)
          });
    }
     onPageChanged(pageNumber){
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios
          .get('http://localhost:3001/api/v1/users')
          .then((response) => {
            this.props.setUsers(response.data.usersData);
            this.props.setTotalUsersCount(response.data.totalUsersCount);
            this.props.toggleIsFetching(false)
          });
     }
    render() {
      console.log(this.props)
      return (<>
      {console.log(this.props)}
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             users={this.props.users}
             setUsers={this.props.setUsers}/>
             </>)
    }
  }
  
  
  
let mapStateToProps = (state) => {
  console.log(state)
    return {
        users: state.usersData,
        pageSize : state.usersData.pageSize,
        totalUsersCount : state.usersData.totalUsersCount,
        currentPage : state.usersData.currentPage,
        isFetching : state.usersData.isFetching
    }
};

    export default connect(mapStateToProps, {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      setTotalUsersCount,
      toggleIsFetching
      })(UsersConnectApi);
    