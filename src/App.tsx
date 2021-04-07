import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Dialogs} from "./components/Dialogs/Dialogs";
//import Profile from "./components/Profile/Profile";

export const App = () => {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Dialogs/>
            {/*<Profile/>*/}

        </div>
    )
}

export default App;
