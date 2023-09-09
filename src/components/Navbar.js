import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

export default function MyNavbar() {
    return (
        <div style={style.container}>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/" style={style.navbarBrand}>Hudson Pierce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{marginRight: '20px'}} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about" style={style.navbarItem}>About</Nav.Link>
                        <Nav.Link href="/portfolio" style={style.navbarItem}>Portfolio</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto" style={{ marginRight: '20px' }}> {/* Add margin to the right */}
                        <Nav.Link href="/contact" style={style.navbarItem}>
                            <Button>Contact</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

const style = {
    container: {
        fontFamily: 'helvetica',
    },
    navbarBrand: {
        paddingLeft: 5,
        fontSize: 25,
        marginLeft: '15px',
    },
    navbarItem: {
        fontSize: 20,
        paddingLeft: 20,
    },
};
