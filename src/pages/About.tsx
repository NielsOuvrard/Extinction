import React from 'react';
import Header from '../components/Header';
import './About.scss';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header />
            <h1 className="title">About Us</h1>
            <p className="subtitle">This is some information about our application.</p>
        </div>
    );
};

export default About;