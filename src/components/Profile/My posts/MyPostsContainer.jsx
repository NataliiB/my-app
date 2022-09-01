import classes from './MyPosts.module.css';
import { addPostCreator, updateNewPostTextCreator } from '../../Redux/ProfileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => { dispatch(addPostCreator()) },
    postChange: (text) => { dispatch(updateNewPostTextCreator(text)) }
  }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;