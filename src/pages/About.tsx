import React from 'react';
import Header from '../components/Header';
import './About.css';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header />
            <h1 className="about-title">About Us</h1>
            <p className="about-text">This is some information about our application.</p>
        </div>
    );
};

export default About;