import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./Myposts/MyPosts";
import {ActionsTypes, StoreType} from '../../redux/state';

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.store._state.profilePage.posts}
                newPostText={props.store._state.profilePage.newPostText}
                dispatch={props.dispatch}
            />
        </div>
    )
}



