import React from 'react';
//import logo from './ProfileInfo/contentLogo.png'
//import cls from './Profile.module.css'
import {Posts} from "./Myposts/Posts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}



