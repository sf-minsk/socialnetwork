import React from 'react';
import logo from "../pictures/PElogovector.png"
import './Header.css'

const Header = () => {
    return (
        <header className="Header">
            <img src={logo} alt=""/>
        </header>
    );
}

export default Header;
