import React from 'react';
import logo from "./PElogovector.png"
import cls from './Header.module.css'

function Header() {
    return (
        <header className={cls.Header}>
            <img src={logo} alt=""/>
        </header>
    );
}

export default Header;
