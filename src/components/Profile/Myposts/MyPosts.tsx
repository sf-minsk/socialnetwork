import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    const posts = [
        {id: 1, message: 'Jane', likeCount: 41},
        {id: 2, message: 'Maxim', likeCount: 20}]
    const postsElements = posts.map(p => <Post id={p.id} message={p.message} likeCount={p.likeCount}/>)
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