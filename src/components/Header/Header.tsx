import React from 'react';
import logo from "./PElogovector.png"
import s from './Header.module.css'
import {NavLink} from 'react-router-dom';

type PropsType = {
    isAuth: boolean
    login: string | null
}

export const Header = (props: PropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt=""/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


