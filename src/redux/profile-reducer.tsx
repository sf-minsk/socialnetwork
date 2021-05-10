import {v1} from "uuid";
import {ActionsTypes, PostsType, ProfilePageType} from "./state";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        case ADD_POST:
            if (state.newPostText) {
                const newPost: PostsType = {
                    id: v1(),
                    message: state.newPostText,
                    likeCount: 0
                }
                state.posts.push(newPost)
                state.newPostText = ('')
            }
            return state
        default:
            return state
    }

}

export const updateNewPostTextAC = (text: string): ActionsTypes => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export const addPostAC = (): ActionsTypes => {
    return {
        type: ADD_POST,
    }
}

export default profileReducer