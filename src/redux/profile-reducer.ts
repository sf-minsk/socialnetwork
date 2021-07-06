import {v1} from "uuid";
import {AppThunkType} from "./store";
import {profileAPI} from "../api/api";

enum Type {
    ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_USER_STATUS = 'SET-USER-STATUS',
}

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
    profile: UsersProfileType | null
    status: string
}

const initialState: InitialStateType = {
    posts: [
        {id: v1(), message: 'Hello', likeCount: 41},
        {id: v1(), message: 'How are u?', likeCount: 20}
    ],
    profile: null,
    status: "status",
}

const profileReducer = (state: InitialStateType = initialState, action: ProfileActionType): InitialStateType => {
    switch (action.type) {
        case Type.ADD_POST:
            const newPost: PostsType = {
                id: v1(),
                message: action.newPostBody,
                likeCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case Type.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case Type.SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        default:
            return state
    }
}

export const addPostAC = (newPostBody: string) => {
    return {
        type: Type.ADD_POST,
        newPostBody,
    } as const
}
export const setStatusAC = (status: string) => ({type: Type.SET_USER_STATUS, status} as const)
export const setUserProfile = (profile: UsersProfileType) => {
    return {
        type: Type.SET_USER_PROFILE,
        profile,
    } as const
}

export type AddPostActionType = ReturnType<typeof addPostAC>
export type SetStatusActionType = ReturnType<typeof setStatusAC>
export type SetUserActionType = ReturnType<typeof setUserProfile>

export type ProfileActionType = AddPostActionType | SetStatusActionType | SetUserActionType

export const getUserProfile = (userId: string): AppThunkType => async dispatch => {
    let res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
}
export const getStatus = (userId: string): AppThunkType => async dispatch => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}
export const updateStatus = (status: string): AppThunkType => async dispatch => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export default profileReducer