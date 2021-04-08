import React from 'react';
import s from './Posts.module.css'
import {Post} from "./Post/Post";

export const Posts = () => {
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>
                    my posts
                </h3>
            </div>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>POST</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message='Hey, how are u?' likeCounts={43}/>
                <Post message='It&#39;s my first post' likeCounts={20}/>
            </div>
        </div>
    )
}