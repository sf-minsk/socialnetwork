import {addPostAC, PostsType, updateNewPostTextAC} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";


type MapStateToPropsType = {
    posts: Array<PostsType>
    newPostText: string
}

type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextAC(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostAC())
        },
    }
}


export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)