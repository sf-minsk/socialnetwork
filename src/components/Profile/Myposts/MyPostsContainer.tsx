import React from 'react';
import {RootStateType, StoreType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";

type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {

    const state: RootStateType = props.store.getState()
    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const onPostChange = (text: string) => {
        let action = updateNewPostTextAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}