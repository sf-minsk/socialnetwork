import {addPostAC, PostsType} from '../../../redux/profile-reducer';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostsType>
}
type MapDispatchPropsType = {
    addPost: (newPostBody: string) => void
}
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostAC(newPostBody))
        },
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)