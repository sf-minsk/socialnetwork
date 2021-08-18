import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, minLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/FormsControls/FormsControls";

type PropsType = {
    posts: Array<PostsType>
    addPost: (newPostBody: string) => void
}
type FormDataType = {
    newPostBody: string
}
const maxLength30 = maxLengthCreator(30)
const minLength2 = minLengthCreator(2)

class AddPostForm extends React.Component<InjectedFormProps<FormDataType>> {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <div>
                    <Field
                        component={TextArea}
                        name='newPostBody'
                        placeholder='Enter Your Post Message'
                        validate={[required, maxLength30, minLength2]}
                    />
                </div>
                <div>
                    <button>POST</button>
                </div>
            </form>
        )
    }
}

const AddPostFormRedux = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(AddPostForm)

export const MyPosts = React.memo((props: PropsType) => {

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
})
