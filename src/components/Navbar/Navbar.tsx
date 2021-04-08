import React from 'react';
import {NavLink} from 'react-router-dom';
import cls from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <NavLink to='/profile' activeClassName={cls.active}>Profile</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/dialogs' activeClassName={cls.active}>Messages</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/news' activeClassName={cls.active}>News</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/music' activeClassName={cls.active}>Music</NavLink>
            </div>
            <div className={cls.item}>
                <NavLink to='/settings' activeClassName={cls.active}>Settings</NavLink>
            </div>
        </nav>
    )
}
