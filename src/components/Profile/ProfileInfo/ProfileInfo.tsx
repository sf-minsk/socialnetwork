import React from 'react';
import logo from './contentLogo.png'
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <div className={s.content}>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>
        </div>
    )
}

