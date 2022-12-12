const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
<<<<<<< HEAD
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
=======
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
>>>>>>> f535ae7... Adding usersProfile page

let initialState = {
  usersData: [
    {
      id: 1, fullName: 'Katya Nazarova', status: 'I`m very pretty', followed: false,
      avatar: 'https://tekst-pesni.online/wp-content/uploads/2021/01/1598182187_katya-adushkina.jpg'
    },
    {
      id: 2, fullName: 'Vova Beluy', status: 'I`m a boss', followed: true,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6zgkTi9qzgdV5Nt0o6b4HKw9idw09GWUXQ&usqp=CAU'
    },
    {
      id: 3, fullName: 'Maks Bondarenko', status: 'Just a wonderfull world', followed: false,
      avatar: 'https://focus.ua/static/storage/thumbs/920x465/2/11/5b2ee39b-3ec7dd7d60cc53c7c19d0128d2cb0112.jpg?v=8314_1'
    }
  ],
  pageSize : 2,
  totalUsersCount:3,
<<<<<<< HEAD
  currentPage : 1,
  isFetching : false
=======
  currentPage : 2,
  profile : []
>>>>>>> f535ae7... Adding usersProfile page

};

export const usersReducer = (state = initialState, action) => {
  switch (action) {
    // case FOLLOW:
    //   return {
    //     ...state,
    //     users: state.usersData.map(u => {
    //       if (u.id === action.userId) {
    //         return { ...u, followed: true }
    //       }
    //       return u;
    //     })
    //   }
    // case UNFOLLOW:
    //   return {
    //     ...state,
    //     users: state.usersData.map(u => {
    //       if (u.id === action.userId) {
    //         return { ...u, followed: false }
    //       }
    //       return u;
    //     })
    //   }
    case SET_USERS:
      return {
        ...state,
<<<<<<< HEAD
        usersData: [action.users]
      }
    //   case SET_CURRENT_PAGE:
    //     return {
    //     ...state,
    //     currentPage:action.currentPage
    //     }
    //     case SET_TOTAL_USERS_COUNT:
    //       return {
    //         ...state,
    //         totalUsersCount : action.totalUsersCount
    //       }
    //       case TOGGLE_IS_FETCHING:
    //         return {
    //           ...state,
    //           isFetching : action.isFetching
    //         }
=======
        usersData: [...state.usersData, ...action.usersData]
      }
      case SET_CURRENT_PAGE:
        return {
        ...state,
        currentPage:[...state.currentPage, ...action.currentPage]
        }
        case SET_TOTAL_USERS_COUNT:
          return {
            ...state,
            totalUsersCount : [...state.totalUsersCount, action.totalUsersCount]
          }
          case SET_USERS_PROFILE:
            return {
              ...state,
              profile : [...state.profile, action.profile]
            }
>>>>>>> f535ae7... Adding usersProfile page
    default:
      return state;
  }
};
<<<<<<< HEAD
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount)=> ({type : SET_TOTAL_USERS_COUNT,totalUsersCount});
export const toggleIsFetching = (isFetching)=> ({type: TOGGLE_IS_FETCHING,isFetching})
=======
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users});
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setUsersProfileAC =(profile) => ({type: SET_USERS_PROFILE, profile})
>>>>>>> f535ae7... Adding usersProfile page
export default usersReducer;