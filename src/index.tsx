import {RootStateType, store} from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import reportWebVitals from './reportWebVitals';

const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
    reportWebVitals();
}

rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store.getState()))