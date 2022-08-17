import classes from'./Header.module.css';
const Header = ()=>{
    return(
    <header className={classes.header}>
    <a className={classes.img}>
      <img src="https://look.com.ua/pic/201805/640x960/look.com.ua-282461.jpg"/>
    </a>
  </header>)
}
export default Header;