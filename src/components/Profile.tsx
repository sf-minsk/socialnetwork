import React from 'react';
import logo from '../pictures/contentLogo.png'
import './Profile.css'

const Profile = () => {
    return (
        <div className={'Content'}>
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
            <div>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
                <div>
                    post3
                </div>
            </div>
        </div>
    );
}

export default Profile;


