import {state, subscribe} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType, updateNewPostText} from "./redux/state";

const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(state)

subscribe(() => {
    rerenderEntireTree(state)
})