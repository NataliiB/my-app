import Preloader from '../../Common/Preloader';
import classes from './ProfileInfo.module.css';
import MyPostsContainer from '../My posts/MyPostsContainer';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (<div>
        <div className={classes.descriptionBlock}>
            <div className={classes.profileAvatar}>
                <img src={props.profile.photos.small} alt="avatar" />
            <img src='http://naturmort.com.ua/image/cache/catalog/Ideyka/KHO4098-637x637.jpg'/>
        </div>
        Avatar and description
        </div>
        <MyPostsContainer />
    </div>
    )
}
export default ProfileInfo;