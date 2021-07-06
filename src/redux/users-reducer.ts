import {AppThunkType} from "./store";
import {usersAPI} from "../api/api";

enum Type {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
    TOGGLE_THE_FOLLOWING_PROGRESS = 'TOGGLE-THE-FOLLOWING-PROGRESS',
}

export type UsersType = {
    id: string
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: { city: string, country: string }
}

export type InitialStateType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgressArray: Array<string>
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgressArray: []
}

const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case Type.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case Type.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
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

export const followSuccess = (userID: string) => ({type: Type.FOLLOW, userID} as const)
export const unfollowSuccess = (userID: string) => ({type: Type.UNFOLLOW, userID} as const)
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
export const toggleTheFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: Type.TOGGLE_THE_FOLLOWING_PROGRESS,
    isFetching,
    userId,
} as const)

export type FollowSuccessActionType = ReturnType<typeof followSuccess>
export type UnfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
export type SetUsersActionType = ReturnType<typeof setUsers>
export type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
export type SetUsersTotalCountActionType = ReturnType<typeof setUsersTotalCount>
export type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
export type ToggleTheFollowingProgressActionType = ReturnType<typeof toggleTheFollowingProgress>

export type UsersActionType = FollowSuccessActionType
    | UnfollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | ToggleTheFollowingProgressActionType

export const getUsers = (currentPage: number, pageSize: number): AppThunkType => async dispatch => {
    dispatch(toggleIsFetching(true))
    const res = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(res.items));
    dispatch(setUsersTotalCount(res.totalCount));
}
export const follow = (userId: string): AppThunkType => async dispatch => {
    dispatch(toggleTheFollowingProgress(true, userId))
    const res = await usersAPI.setFollowUser(userId)
    if (res.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleTheFollowingProgress(false, userId))
}
export const unFollow = (userId: string): AppThunkType => async dispatch => {
    dispatch(toggleTheFollowingProgress(true, userId))
    const res = await usersAPI.setUnfollowUser(userId)
    if (res.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleTheFollowingProgress(false, userId))
}


export default usersReducer