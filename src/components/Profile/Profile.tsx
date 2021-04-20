import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./Myposts/MyPosts";
import {PostsType} from '../../redux/state';

type PropsType = {
    posts: Array<PostsType>
    addPost: (postMessage: string) => void
}

export const Profile = (props: PropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost}/>
        </div>
    )
}



