import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostCreator, updateNewPostTextCreator } from '../../Redux/ProfileReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
      {
      (store) => {
        let state = store.getState().profilePage;
        let addNewPost = () => {
          store.dispatch(addPostCreator());
        }
        let postChange = (text) => {
          store.dispatch(updateNewPostTextCreator(text));
        }
        return <MyPosts addNewPost={addNewPost} postChange={postChange} profilePage={state} />
      }
    }
    </StoreContext.Consumer>
  )
}
export default MyPostsContainer;