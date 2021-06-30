import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {UsersProfileType} from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {UsersType} from "./users-reducer";
import authReducer from "./auth-reducer";
import {reducer as formReducer} from "redux-form";
import thunkMiddleware from "redux-thunk";

type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewMessageText = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
type FollowActionType = {
    type: 'FOLLOW'
    userID: string
}
type UnFollowActionType = {
    type: 'UNFOLLOW'
    userID: string
}
type SetUsersActionType = {
    type: 'SET-USERS'
    users: Array<UsersType>
}
type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
type SetUsersTotalCountActionType = {
    type: 'SET-USERS-TOTAL-COUNT'
    totalCount: number
}
type toggleIsFetchingActionType = {
    type: 'TOGGLE-IS-FETCHING'
    isFetching: boolean
}
type setUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile: UsersProfileType
}

type setUserDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        id: number
        email: string
        login: string
    }
}

type setStatus = {
    type: 'SET-USER-STATUS'
    status: string
}

type toggleTheFollowingProgress = {
    type: 'TOGGLE-THE-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: string
}


export type ActionsTypes =
    AddPostActionType
    | UpdateNewPostTextType
    | UpdateNewMessageText
    | SendMessageActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | toggleIsFetchingActionType
    | setUserProfileActionType
    | setUserDataActionType
    | toggleTheFollowingProgress
    | setStatus


const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store