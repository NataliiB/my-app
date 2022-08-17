import classes from  './../Dialoges.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialoges/1' + props.id}>{props.name}</NavLink>
        </div>
    )
};
export default DialogItem;