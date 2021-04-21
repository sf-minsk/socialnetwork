import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount}/>)
    const newPostTextElement = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        if (newPostTextElement.current) {
            props.addPost(newPostTextElement.current?.value)
            newPostTextElement.current.value = ''
        }
    }


    return (
        <div className={s.postsBlock}>
            <div><h3> my posts </h3></div>
            <div>
                <div><textarea ref={newPostTextElement}/></div>
                <div>
                    <button onClick={addPost}>POST</button>
                </div>
            </div>
            <div className={s.posts}> {postsElements}  </div>
        </div>
    )
}