import {v1} from "uuid";
import {AppThunkType} from "./store";
import {profileAPI} from "../api/api";

enum Type {
    ADD_POST = 'profile/ADD-POST',
    DELETE_POST = 'profile/DELETE-POST',
    SET_USER_PROFILE = 'profile/SET-USER-PROFILE',
    SET_USER_STATUS = 'profile/SET-USER-STATUS',
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
    profile: null as UsersProfileType | null,
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
        case Type.DELETE_POST: {
            return {...state, posts: state.posts.filter(el => el.id !== action.id)}
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
export const deletePostAC = (id: string) => {
    return {
        type: Type.DELETE_POST,
        id
    } as const
}
export const setStatusAC = (status: string) => ({type: Type.SET_USER_STATUS, status} as const)
export const setUserProfile = (profile: UsersProfileType) => {
    return {
        type: Type.SET_USER_PROFILE,
        profile,
    } as const
}

export type ProfileActionType =
    | ReturnType<typeof addPostAC>
    | ReturnType<typeof deletePostAC>
    | ReturnType<typeof setStatusAC>
    | ReturnType<typeof setUserProfile>

export const getUserProfile = (userId: number | null): AppThunkType => async dispatch => {
    const res = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(res))
}
export const getStatus = (userId: number): AppThunkType => async dispatch => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setStatusAC(res.data))
}
export const updateStatus = (status: string): AppThunkType => async dispatch => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(setStatusAC(status))
    }
}

export default profileReducer