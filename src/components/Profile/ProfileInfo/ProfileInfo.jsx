import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (<div>
        <div className={classes.descriptionBlock}>
            <div className={classes.profileAvatar}>
            <img src='http://naturmort.com.ua/image/cache/catalog/Ideyka/KHO4098-637x637.jpg'/>
        </div>
        Avatar and description
        </div>
    </div>
    )
}
export default ProfileInfo;