import {v1} from 'uuid';

export type PostsType = {
    id: string
    message: string
    likeCount: number
}
export type DialogsType = {
    id: string
    name: string
}
export type MessagesType = {
    id: string
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type UpdateNewMessageText = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextType | UpdateNewMessageText | SendMessageActionType

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE'

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
        }
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
    dispatch(action) { //{type: 'ADD_POST}
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText) {
                const newPost: PostsType = {
                    id: v1(),
                    message: this._state.profilePage.newPostText,
                    likeCount: 0
                }
                this._state.profilePage.posts.push(newPost)
                this._state.profilePage.newPostText = ('')
            }
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newMessageText
            this._callSubscriber()
        } else if (action.type === SEND_MESSAGE) {
            if (this._state.dialogsPage.newMessageText) {
                const newMessage: MessagesType = {
                    id: v1(),
                    message: this._state.dialogsPage.newMessageText,
                }
                this._state.dialogsPage.messages.push(newMessage)
                this._state.dialogsPage.newMessageText = ('')
            }
            this._callSubscriber()
        }
    },
}

export const addPostAC = (): ActionsTypes => {
    return {
        type: ADD_POST,
    }
}
export const updateNewPostTextAC = (text: string): ActionsTypes => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    }
}
export const sendMessageAC = (): ActionsTypes => {
    return {
        type: SEND_MESSAGE,
    }
}
export const updateNewMessageTextAC = (text: string): ActionsTypes => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: text,
    }
}


