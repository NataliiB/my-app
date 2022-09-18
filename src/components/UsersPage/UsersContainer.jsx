import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC } from "../Redux/UsersReducer";
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
            }
        }
    }





    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
    export default UsersContainer;