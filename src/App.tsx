import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsTypes, RootStateType} from './redux/store';

type PropsType = {
    dispatch: (action: ActionsTypes) => void
    state: RootStateType
}

export const App: React.FC<PropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() =>
                        <Profile
                            state={props.state.profilePage}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/dialogs' render={() =>
                        <Dialogs
                            state={props.state.dialogsPage}
                            dispatch={props.dispatch}
                        />}
                    />
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    )
}

