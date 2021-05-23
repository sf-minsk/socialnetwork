import {v1} from "uuid";
import {ActionsTypes} from "./store";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export type PostsType = {
    id: string
    message: string
    likeCount: number
}

export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
}


const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hello', likeCount: 41},
        {id: v1(), message: 'How are u?', likeCount: 20}
    ],
    newPostText: '',
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            }
            const stateCopy = {...state}
            state.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ('')
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            const stateCopy = {...state}
            stateCopy.newPostText = action.newText
            return stateCopy
        }
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