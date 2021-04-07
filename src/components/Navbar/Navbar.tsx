import React from 'react';
import cls from './Navbar.module.css'

export const Navbar = () => {
    return (
        <nav className={cls.nav}>
            <div className={cls.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={cls.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={cls.item}>
                <a>News</a>
            </div>
            <div className={cls.item}>
                <a>Music</a>
            </div>
            <div className={cls.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}
