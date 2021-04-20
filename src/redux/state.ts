export type PostsType = {
    id: number
    message: string
    likeCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}


export const state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likeCount: 41},
            {id: 2, message: 'How are u?', likeCount: 20}],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Jane'},
            {id: 2, name: 'Maxim'},
            {id: 3, name: 'Liza'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Sam'}],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How is your learning?'},
            {id: 3, message: 'Is good.'}]
    }
}

export const addPost = (postMessage: string) => {
    const newPost:PostsType = {
        id: 5,
        message: postMessage,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
}


