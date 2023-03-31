import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Header = () => {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="left-nav">
                        <div className="menu-bar" id="menuBtn"><i className="fa-solid fa-bars"></i></div>
                        <Link to="/" className="logo"><img src="./images/logo.png" alt="" /></Link>
                    </div>
                    <Navbar />
                </div>
            </header>
        </>
    )
}

export default Header
