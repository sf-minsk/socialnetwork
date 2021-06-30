import {v1} from "uuid";
import {ActionsTypes} from "./store";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_USER_STATUS = 'SET-USER-STATUS'

export type PostsType = {
    id: string
    message: string
    likeCount: number
}

export type UsersProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    }
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = {
    posts: Array<PostsType>
    newPostText: string
    profile: UsersProfileType | null
    status: string
}


const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hello', likeCount: 41},
        {id: v1(), message: 'How are u?', likeCount: 20}
    ],
    newPostText: '',
    profile: null,
    status: "status",
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }

        case ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
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
export const setStatusAC = (status: string): ActionsTypes => ({type: SET_USER_STATUS, status})


export const setUserProfile = (profile: UsersProfileType): ActionsTypes => {
    return {
        type: SET_USER_PROFILE,
        profile,
    }
}
export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(data => {
                dispatch(setUserProfile(data))
            }
        );
}
export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
                dispatch(setStatusAC(response.data))
            }
        );
}
export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatusAC(status))
                }
            }
        );
}


export default profileReducer