import React from 'react';
import logo from './contentLogo.png'
import cls from './Profile.module.css'
import Posts from "./Myposts/Posts";

function Profile() {
    return (
        <div className={cls.Content}>
            <img src={logo} alt=""/>
            <div>
                avatar + description
            </div>
            <Posts/>
        </div>
    )
}

export default Profile;


