import classes from './NavbarFriends.module.css';

const NavbarFriends = (props) => {
    return (
        <div>
            <div>
                {props.name}</div>
            <div className={classes.usersFriendAvatar}>
                <img src={props.avatar}/>
            </div>

        </div>
    )
};
export default NavbarFriends;