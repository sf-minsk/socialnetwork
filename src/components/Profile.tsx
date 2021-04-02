import React from 'react';
import logo from '../pictures/contentLogo.png'
import classes from './Profile.module.css'

function Profile() {
    return (
        <div className={classes.Content}>
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
            <div className={classes.posts}>
                <div className={classes.item}>
                    post1
                </div>
                <div className={classes.item}>
                    post2
                </div>
                <div className={classes.item}>
                    post3
                </div>
            </div>
        </div>
    );
}

export default Profile;


