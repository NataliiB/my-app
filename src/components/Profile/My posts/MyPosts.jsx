import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { type } from '@testing-library/user-event/dist/type';
import { addPostCreator,updateNewPostTextCreator } from '../../Redux/State';



const MyPosts = (props) => {
  console.log(props)
let PostElements = props.profilePage.postData.map(p => <div><Post message={p.message} likeCount={p.likeCount} /></div>);
let newPostElement = React.createRef();
let newPostText = props.profilePage.newPostText;
let addNewPost = ()=>{
  props.dispatch(addPostCreator());
}
let onPostChange =()=>{
  let text = newPostElement.current.value;
  let action = updateNewPostTextCreator(text);
  props.dispatch(action);
}
  return (
    <div>
      <h3>Posts</h3>
      <div className={classes.post}>
        <div>
          <textarea value={newPostText} onChange={onPostChange}ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add post</button>
        </div>
      </div>
      {PostElements}
    </div>
  )
}
export default MyPosts;