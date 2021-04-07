import React from 'react';
import logo from './contentLogo.png'
import cls from './Profile.module.css'
import Posts from "./Myposts/Posts";

export const Profile = () => {
    return (
        <div className={cls.content}>
            <img src={logo} alt=""/>
            <div>
                avatar + description
            </div>
            <Posts/>
        </div>
    )
}



