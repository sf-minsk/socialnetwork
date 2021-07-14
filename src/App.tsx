import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {BrowserRouter, Route, RouteComponentProps, withRouter} from 'react-router-dom';
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeAppTC} from "./redux/app-reducer";
import {AppStateType} from "./redux/store";
import {Preloader} from "./components/Common/Preloader/Preloader";

type mapStateToPropsType = {
    initialized: boolean
}
type mapDispatchToPropsType = {
    initializeAppTC: () => void
}
type PropsType = mapStateToPropsType & mapDispatchToPropsType

class App extends React.Component<RouteComponentProps & PropsType> {

    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className="App-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>

                        <Route path='/profile/:userId?' render={() =>
                            <ProfileContainer/>}
                        />
                        <Route path='/dialogs' render={() =>
                            <DialogsContainer/>}
                        />
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>


                        <Route path='/users' render={() => <UsersContainer/>}/>

                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>

                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeAppTC})
)(App)



