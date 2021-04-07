import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
// import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

export const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Profile/>*/}
                <Dialogs/>
            </div>
        </div>
    )
}

