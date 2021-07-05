import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newPostBody: string) => void
}
type FormDataType = {
    newPostBody: string
}
const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component='textarea'
                    name='newPostBody'
                    placeholder='Enter Your Post Message'/>
            </div>
            <div>
                <button>POST</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddPostForm)

export const MyPosts = (props: PropsType) => {
    const postsElements = props.posts.map(p =>
        <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
    )
    const onAddNewPost = (values: FormDataType) => {
        props.addPost(values.newPostBody)
    }
    return (
        <div className={s.postsBlock}>
            <div><h3> my posts </h3></div>
            <AddPostFormRedux onSubmit={onAddNewPost}/>
            <div className={s.posts}> {postsElements}  </div>
        </div>
    )
}
