import React from 'react';
import Header from '../components/Header';
import './About.scss';
import aboutImage from '../assets/big_image.png';
import cercle from '../assets/cercle.svg';

const About: React.FC = () => {
    return (
        <div className="about">
            <Header />
            <h1 className="about-title">About Us</h1>
            <p className="about-text">This is some information about our application.</p>

            <div className="about-image">
                <img src={aboutImage} alt="About" className="about-image-main" />
                <img src={cercle} className="flashing circle" alt="logo" style={{ top: '50%', left: '2.5%' }} />
                <img src={cercle} className="flashing circle" alt="logo" style={{ top: '35%', left: '15%' }} />
            </div>
        </div>
    );
};

export default About;