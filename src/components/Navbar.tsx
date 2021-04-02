import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className={'Nav'}>
            <div className='item'>
                <a href="121">Profile</a>
            </div>
            <div className='item'>
                <a href="221">Messages</a>
            </div>
            <div className='item'>
                <a href="">News</a>
            </div>
            <div className='item'>
                <a href="">Music</a>
            </div>
            <div className='item'>
                <a href="">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
