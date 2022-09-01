import axios from "axios";
import React from "react";
import classes from './Users.module.css';
import userPhoto from './../../Images/icon-256x256.png'

const Users = (props) => {
    if(props.users.length===0){
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>
        
    {props.setUsers(response.data.items);})
    }
    
    return <div>{
        props.users.map(u =>
            <div key={u.id}>
                <div>
                    <img src={null?userPhoto:u.avatar} className={classes.avatar} />
                </div>
                <div>
                    {u.followed
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
            </div>
        )
    }
    </div>
}

export default Users;