import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/store";

type PropsType = {
    newPostText: string
    posts: Array<PostsType>
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p =>
        <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
    )
    const addPost = () => {
        props.addPost()
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.currentTarget.value
        props.updateNewPostText(text)
    }

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