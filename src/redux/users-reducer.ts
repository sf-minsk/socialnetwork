import {ActionsTypes} from "./store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_USERS_TOTAL_COUNT = 'SET-USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


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
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
}

const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                }),
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_USERS_TOTAL_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }


        default:
            return state
    }

}


export const follow = (userID: string): ActionsTypes => ({type: FOLLOW, userID})
export const unfollow = (userID: string): ActionsTypes => ({type: UNFOLLOW, userID})
export const setUsers = (users: Array<UsersType>): ActionsTypes => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number): ActionsTypes => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (usersTotalCount: number): ActionsTypes => ({
    type: SET_USERS_TOTAL_COUNT,
    totalCount: usersTotalCount
})
export const toggleIsFetching = (isFetching: boolean): ActionsTypes => ({type: TOGGLE_IS_FETCHING, isFetching})


export default usersReducer