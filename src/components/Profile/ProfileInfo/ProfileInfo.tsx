import React from 'react';
import logo from './contentLogo.png'
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";
import {UsersProfileType} from "../../../redux/profile-reducer";

type PropsType = {
    profile: UsersProfileType
}


export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.content}>
            <div>
                <img src={logo} alt={'logo'}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'userPhoto'}/>
                avatar + description
            </div>
        </div>
    )
}

