import postStyles from './Post.module.css';
const Post = (props) => {
  return (
    <div>
      <div className={postStyles.post}>
        Post
        <div>
          <div className={postStyles.postAvatar}>
            <img src="https://thumbs.dreamstime.com/b/%D1%83%D0%BC%D0%BD%D1%8B%D0%B9-%D0%BC%D0%BE%D0%BB%D0%BE%D0%B4%D0%BE%D0%B9-%D1%81%D1%87%D0%B0%D1%81%D1%82%D0%BB%D0%B8%D0%B2%D1%8B%D0%B9-%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D0%BA-%D0%B4%D0%B5%D0%BB%D0%B0%D0%B5%D1%82-%D0%B7%D0%BD%D0%B0%D0%BA-%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-157419252.jpg" ></img>
          </div>
          <div>
          {props.message}
          </div>
          <div>
            <span>Like </span>{props.likeCount}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Post;