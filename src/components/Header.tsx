import React from 'react';
import logo from "../pictures/PElogovector.png"
import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.Header}>
            <img src={logo} alt=""/>
        </header>
    );
}

export default Header;
