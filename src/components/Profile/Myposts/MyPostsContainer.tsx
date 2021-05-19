import React from 'react';
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostAC())
                }
                const onPostChange = (text: string) => {
                    let action = updateNewPostTextAC(text)
                    store.dispatch(action)
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}