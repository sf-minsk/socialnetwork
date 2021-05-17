import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/store";
import {addPostAC, updateNewPostTextAC} from '../../../redux/profile-reducer';

type PropsType = {
    newPostText: string
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
}



export const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p =>
        <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
    )
    const addPost = () => {

        props.dispatch(addPostAC())
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        const text = e.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))}

    return (
        <div className={s.postsBlock}>
            <div><h3> my posts </h3></div>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>POST</button>
                </div>
            </div>
            <div className={s.posts}> {postsElements}  </div>
        </div>
    )
}