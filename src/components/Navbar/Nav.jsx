import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import NavbarFriends from './NavbarFriends/NavbarFriends';
const Nav = (props) => {
  let usersFriendsElements = props.navFriends.map(n=> <NavbarFriends avatar={n.avatar} name={n.name}/>)
  return (
    
    <nav className={classes.nav} >


      <div className={classes.item} >
        <NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/dialoges' activeClassName={classes.activeLink}>Messages</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={classes.item}>
        <NavLink to='/settings'>Settings</NavLink>
      </div>
      <div>
       {usersFriendsElements}
      </div>
    </nav>
  )
}
export default Nav;