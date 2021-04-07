import React from 'react';
import logo from "./PElogovector.png"
import cls from './Header.module.css'

export const Header = () => {
    return (
        <header className={cls.header}>
            <img src={logo} alt=""/>
        </header>
    )
}


