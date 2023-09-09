import React from 'react';
import background from '../img/mountain.jpg';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={style.container}>
            <div style={{
                color: 'white',
                width: '60vw',
                font: 'georgia'
            }}>
                <h1>
                    Hey, I'm Hudson Pierce
                </h1>
                <h4 style={{paddingTop: 10, paddingBottom: 10}}>
                    A Web Developer focused on building websites that are simple and easy to use.
                </h4>
                <Button 
                    style={{backgroundColor: '#596071', border: 'none', color: 'white', fontWeight: 500}} 
                    onClick={() => navigate('/contact')}
                >
                    Contact Me
                </Button>
            </div>
        </div>
    )
}

const style = {
    container: {
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
}

export default Home;