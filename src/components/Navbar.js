import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

export default function Navbar() {
    return (
        <nav className='nav'>
            <a href="/" className='site-title'>
                Hudson Pierce
            </a>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/about">About Me</a>
                </li>
            </ul>
        </nav>
    );
};

