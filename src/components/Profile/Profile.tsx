import React from 'react';
//import logo from './ProfileInfo/contentLogo.png'
//import s from './Profile.module.css'
import {MyPosts} from "./Myposts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}



