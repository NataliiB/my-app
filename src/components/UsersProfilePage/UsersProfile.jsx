import React from "react";

const UsersProfile =(props)=>{
    return (<div>
        {props.usersProfileInfo.fullname}
        {props.usersProfileInfo.status}
        {props.usersProfileInfo.image_url}
    </div>)
}
export default UsersProfile;