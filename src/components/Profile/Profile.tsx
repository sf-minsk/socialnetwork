import React from 'react';
import logo from './contentLogo.png'
import cls from './Profile.module.css'

function Profile() {
    return (
        <div className={cls.Content}>
            <img src={logo} alt=""/>
            <div>
                avatar + description
            </div>
            <div>
                my posts
            </div>
            <div>
                New post
            </div>
            <div className={cls.posts}>
                <div className={cls.item}>
                    post1
                </div>
                <div className={cls.item}>
                    post2
                </div>
                <div className={cls.item}>
                    post3
                </div>
            </div>
        </div>
    );
}

export default Profile;


