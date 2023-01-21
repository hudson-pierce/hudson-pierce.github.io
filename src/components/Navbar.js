import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MyNavbar() {
    return (
        <div style={style.container}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/" sticky='top' style={style.navbarBrand}>Hudson Pierce</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/projects" style={style.navbarItem}>Projects</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/about" style={style.navbarItem}>About</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/contact" style={style.navbarItem}>Contact</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

const style = {
    container: {
        fontFamily: 'helvetica'
    },
    navbarBrand: {
        paddingLeft: 5,
        fontSize: 25,
        marginLeft: '15px'
    },
    navbarItem: {
        fontSize: 20, 
        paddingLeft: 20
    }
}
