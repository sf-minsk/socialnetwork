import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../index";

type PropsType = {
    posts: Array<PostsType>
}

export const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={s.postsBlock}>
            <div><h3> my posts </h3></div>
            <div>
                <div><textarea/></div>
                <div>
                    <button>POST</button>
                </div>
            </div>
            <div className={s.posts}> {postsElements}  </div>
        </div>
    )
}