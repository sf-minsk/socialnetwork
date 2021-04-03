import React from 'react';
//import cls from './Posts.module.css'
import Post from "./Post/Post";

function Posts() {
    return (
        <div>
            <div>
                my posts
            </div>
            <div>
                <textarea/>
                <button>POST</button>
            </div>
            <Post message='Hey, how are u?' likeCounts={43}/>
            <Post message='It&#39;s my first post' likeCounts={20}/>
        </div>
    )
}

export default Posts;


