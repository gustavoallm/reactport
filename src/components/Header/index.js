import './header.css';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaArrowUp } from 'react-icons/fa';

function Header() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle('responsive_nav');
    };

    return (
        <header className="header">
            <Link className="logo" to="/">
                GustavoAllm
            </Link>
            <nav ref={navRef}>
                <a className="homebtn" href="#top">
                    Home
                </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Header;
