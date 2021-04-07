import React from 'react';
import {NavLink} from 'react-router-dom';
import cls from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <NavLink to='/profile'>Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
        </nav>
    )
}
