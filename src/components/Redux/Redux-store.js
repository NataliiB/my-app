import { profileReducer } from './ProfileReducer';
import { dialogesReducer } from './DialogesReducer';
import { usersFriendsReducer } from './UsersFriendsReducer'
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';
const reducer = combineReducers({
    profilePage: profileReducer,
    dialogesPage: dialogesReducer,
    usersFriendsPage: usersFriendsReducer
});
const store = configureStore({reducer});

export default store;