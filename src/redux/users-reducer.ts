import {AppThunkType} from "./store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObjectInArray} from "../utils/object-helpers";

enum Type {
    FOLLOW = 'users/FOLLOW',
    UNFOLLOW = 'users/UNFOLLOW',
    SET_USERS = 'users/SET-USERS',
    SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE',
    SET_USERS_TOTAL_COUNT = 'users/SET-USERS-TOTAL-COUNT',
    TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING',
    TOGGLE_THE_FOLLOWING_PROGRESS = 'users/TOGGLE-THE-FOLLOWING-PROGRESS',
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type usersStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressArray: Array<number>
}

const initialState: usersStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgressArray: []
}

const usersReducer = (state: usersStateType = initialState, action: UsersActionType): usersStateType => {
    switch (action.type) {
        case Type.FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state, action.userID, true)
            }
        case Type.UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state, action.userID, false)
            }
        case Type.SET_USERS: {
            return {...state, users: action.users}
        }
        case Type.SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case Type.SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case Type.TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case Type.TOGGLE_THE_FOLLOWING_PROGRESS: {
            return {
                ...state, followingInProgressArray: action.isFetching
                    ? [...state.followingInProgressArray, action.userId]
                    : state.followingInProgressArray.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}

//AC
export const followSuccess = (userID: number) => ({type: Type.FOLLOW, userID} as const)
export const unfollowSuccess = (userID: number) => ({type: Type.UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UsersType>) => ({type: Type.SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({
    type: Type.SET_CURRENT_PAGE,
    currentPage
} as const)
export const setUsersTotalCount = (usersTotalCount: number) => ({
    type: Type.SET_USERS_TOTAL_COUNT,
    totalCount: usersTotalCount,
} as const)
export const toggleIsFetching = (isFetching: boolean) => ({
    type: Type.TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleTheFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: Type.TOGGLE_THE_FOLLOWING_PROGRESS,
    isFetching,
    userId,
} as const)


//TC
export const getUsersTC = (page: number, pageSize: number): AppThunkType => async dispatch => {
    dispatch(toggleIsFetching(true))
    const res = await usersAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setCurrentPage(page))
    dispatch(setUsers(res.items));
    dispatch(setUsersTotalCount(res.totalCount));
}

export const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: ApiMethodType, actionCreator: any) => {
    dispatch(toggleTheFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleTheFollowingProgress(false, userId))
}

export const follow = (userId: number): AppThunkType => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.setFollowUser.bind(usersAPI), followSuccess)
}
export const unFollow = (userId: number): AppThunkType => async dispatch => {
    await followUnfollowFlow(dispatch, userId, usersAPI.setUnfollowUser.bind(usersAPI), unfollowSuccess)
}


//types
type ApiMethodType = (userId: number) => Promise<any>

export type UsersActionType = ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleTheFollowingProgress>

export default usersReducer