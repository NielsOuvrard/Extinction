import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li className="header-nav-list-item">
                        <Link to="/" className="header-nav-list-item-link">Home</Link>
                    </li>
                    <li className="header-nav-list-item">
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;