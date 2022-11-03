import { profileReducer } from './ProfileReducer';
import { dialogesReducer } from './DialogesReducer';
import { usersReducer } from './UsersReducer'
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

const reducer = combineReducers({
    profilePage: profileReducer,
    dialogesPage: dialogesReducer,
    usersPage: usersReducer
    
});
const store = configureStore({reducer});
window.store = store;

export default store;