import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

export type PostsType = {
    id: number
    message: string
    likeCount: number
}
const posts: Array<PostsType> = [
    {id: 1, message: 'Jane', likeCount: 41},
    {id: 2, message: 'Maxim', likeCount: 20}]

export type DialogsType = {
    id: number
    name: string
}
const dialogs: Array<DialogsType> = [
    {id: 1, name: 'Jane'},
    {id: 2, name: 'Maxim'},
    {id: 3, name: 'Liza'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Sam'}]

export type MessagesType = {
    id: number
    message: string
}
const messages: Array<MessagesType> = [
    {id: 1, message: 'Hi!'},
    {id: 2, message: 'How is your learning?'},
    {id: 3, message: 'Is good.'}]

ReactDOM.render(
    <React.StrictMode>
        <App
            posts={posts}
            dialogs={dialogs}
            messages={messages}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
