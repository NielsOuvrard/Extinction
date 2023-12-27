import React from 'react';
import Header from '../components/Header';
import './About.css';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>About Us</h1>
            <p>This is some information about our application.</p>
        </div>
    );
};

export default About;