import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./Myposts/MyPosts";
import {ActionsTypes, ProfilePageType, StoreType} from '../../redux/store';

type PropsType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                newPostText={props.state.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}



