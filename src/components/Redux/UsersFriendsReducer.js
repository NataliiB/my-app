let initialState = {
  friendsData: [
      { id: '1', name: 'Katya', avatar: 'https://tekst-pesni.online/wp-content/uploads/2021/01/1598182187_katya-adushkina.jpg' },
      { id: '1', name: 'Vova', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6zgkTi9qzgdV5Nt0o6b4HKw9idw09GWUXQ&usqp=CAU' },
      { id: '1', name: 'Maks', avatar: 'https://focus.ua/static/storage/thumbs/920x465/2/11/5b2ee39b-3ec7dd7d60cc53c7c19d0128d2cb0112.jpg?v=8314_1' }
  ]
};

export const usersFriendsReducer = (state = initialState,action)=>{
  return state;
};
export default usersFriendsReducer;