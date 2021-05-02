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
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

let rerenderEntireTree = () => {
    console.log('state was changed')
}

export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'Hello', likeCount: 41},
            {id: v1(), message: 'How are u?', likeCount: 20}],
        newPostText: '',
    },
    dialogsPage: {
        dialogs: [
            {id: v1(), name: 'Jane'},
            {id: v1(), name: 'Maxim'},
            {id: v1(), name: 'Liza'},
            {id: v1(), name: 'Alex'},
            {id: v1(), name: 'Sam'}],
        messages: [
            {id: v1(), message: 'Hi!'},
            {id: v1(), message: 'How is your learning?'},
            {id: v1(), message: 'Is good.'}]
    }
}

export const addPost = () => {
    if (state.profilePage.newPostText) {
        const newPost: PostsType = {
            id: v1(),
            message: state.profilePage.newPostText,
            likeCount: 0
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.newPostText = ('')
    }
    rerenderEntireTree()
}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}

export const subscribe = (observer: () => void) => {
    rerenderEntireTree = observer//pattern observer
}
