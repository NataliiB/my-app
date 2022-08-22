import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';




const MyPosts = (props) => {
let PostElements = props.profilePage.postData.map(p => <div><Post message={p.message} likeCount={p.likeCount} /></div>);
let newPostElement = React.createRef();
let newPostText = props.profilePage.newPostText;
let onAddNewPost = ()=>{
  props.addNewPost();
}
let onPostChange =()=>{
  let text = newPostElement.current.value;
  props.postChange(text);
}
  return (
    <div>
      <h3>Posts</h3>
      <div className={classes.post}>
        <div>
          <textarea value={newPostText} onChange={onPostChange}ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={onAddNewPost}>Add post</button>
        </div>
      </div>
      {PostElements}
    </div>
  )
}
export default MyPosts;