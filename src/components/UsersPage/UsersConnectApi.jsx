import axios from "axios";
import React, { useEffect, useState } from "react";
import Users from "./Users";
import { initialState } from "../Redux/UsersReducer";
// import { createContext } from "react";
import Pagination from "./Pagination";


export default function UsersConnectApi() {
  const [newState, setNewState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;
  // const UsersProfileContext = createContext()

  const request = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:3001/api/v1/users`);
      setNewState(response.data);
      setLoading(false);
      console.log(response.data)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    request();
  }, []);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = newState.usersData.slice(
    indexOfFirstUser,
    indexOfLastUser
  );
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Users users={currentUsers} loading={loading}/>
      {<Pagination
        totalUsers={newState.usersData.length}
        usersPerPage={usersPerPage}
        paginate={paginate}
      /> }
    </div>
  );
}

// let mapStateToProps = (state) => {
//   console.log('mapStateToProps');
//   console.log(state)
//     return {
//         users: state.usersPage.usersData,
//         pageSize : state.usersPage.pageSize,
//         totalUsersCount : state.usersPage.totalUsersCount,
//         currentPage : state.usersPage.currentPage
//     }
// };
// let mapDispatchToProps = (dispatch) => {
//   console.log('mapDispatchToProps')
//         return {
//             follow: (userId) => {
//                 dispatch(followAC(userId))
//             },
//             unfollow: (userId) => {
//                 dispatch(unfollowAC(userId))
//             },
//             setUsers: (users) => {
//                 dispatch(setUsersAC(users))
//             },
//             setCurrentPage: (pageNumber) =>{
//                 dispatch(setCurrentPageAC(pageNumber))
//             },
//             setTotalUsersCount: (totalUsersCount) =>{
//                 dispatch(setTotalUsersCountAC(totalUsersCount))
//             }
//         }
//     }

//     const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersConnectApi);
//     export default UsersContainer;
