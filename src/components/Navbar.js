import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './Navbar.css';

// check documentation here: https://react-bootstrap.github.io/components/navbar/
export default function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/" id='navbar-brand'>Hudson Pierce</Navbar.Brand>
            <Nav>
                <Nav.Link href="/projects">Projects</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav>
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

