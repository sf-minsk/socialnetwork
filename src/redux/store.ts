import {v1} from 'uuid';
import {UsersProfileType} from "./profile-reducer";
import {UsersType} from "./users-reducer";

type PostsType = {
    id: string
    message: string
    likeCount: number
}
type DialogsType = {
    id: string
    name: string
}
type MessagesType = {
    id: string
    message: string
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}

export type SidebarType = {}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

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
    type: 'SET_USERS'
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

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'Hello', likeCount: 41},
                {id: v1(), message: 'How are u?', likeCount: 20}
            ],
            newPostText: '',
        },
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Jane'},
                {id: v1(), name: 'Maxim'},
                {id: v1(), name: 'Liza'},
                {id: v1(), name: 'Alex'},
                {id: v1(), name: 'Sam'}
            ],
            messages: [
                {id: v1(), message: 'Hi!'},
                {id: v1(), message: 'How is your learning?'},
                {id: v1(), message: 'Is good.'}
            ],
            newMessageText: '',
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state was changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer//pattern observer
    },
    dispatch(action) {
        //     this._state.profilePage = profileReducer(this._state.profilePage, action)
        //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        //     this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber()
    },
}


