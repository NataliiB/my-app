import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../Redux/UsersReducer";
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersData
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
            }
        }
    }





    const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
    export default UsersContainer;