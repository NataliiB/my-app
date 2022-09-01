const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';


let initialState = {
  usersData: [
    // {
    //   id: 1, fullName: 'Katya Nazarova', status: 'I`m very pretty', followed: false,
    //   avatar: 'https://tekst-pesni.online/wp-content/uploads/2021/01/1598182187_katya-adushkina.jpg'
    // },
    // {
    //   id: 2, fullName: 'Vova Beluy', status: 'I`m a boss', followed: true,
    //   avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6zgkTi9qzgdV5Nt0o6b4HKw9idw09GWUXQ&usqp=CAU'
    // },
    // {
    //   id: 3, fullName: 'Maks Bondarenko', status: 'Just a wonderfull world', followed: false,
    //   avatar: 'https://focus.ua/static/storage/thumbs/920x465/2/11/5b2ee39b-3ec7dd7d60cc53c7c19d0128d2cb0112.jpg?v=8314_1'
    // }
  ]
};

export const usersReducer = (state = initialState, action) => {
  switch (action) {
    case FOLLOW:
      return {
        ...state,
        users: state.usersData.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true }
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.usersData.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false }
          }
          return u;
        })
      }
    case SET_USERS:
      return {
        ...state,
        usersData: [...state.usersData,...action.usersData]
      }
    default:
      return state;
  }
};
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users})
export default usersReducer;