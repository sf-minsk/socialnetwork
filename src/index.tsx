import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, state} from "./redux/state";


ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost}/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
