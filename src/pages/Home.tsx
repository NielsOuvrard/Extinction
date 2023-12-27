import React from 'react';
import Header from '../components/Header';
import './Home.css';
// src/assets/triangle.svg
// import triangle from '../assets/triangle.svg';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <h1 className="home-text">Home</h1>
            {/* <img src={triangle} className="home-logo" alt="logo" /> */}
            <svg width="209" height="150" viewBox="0 0 209 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="triangle">
                    <g id="lightGroup">
                        <path id="Polygon 1" d="M150 75L37.5 139.952L37.5 10.0481L150 75Z" />
                    </g>
                    <g id="darkGroup">
                        <path id="Polygon 2" d="M209 75L96.5 139.952L96.5 10.0481L209 75Z" />
                    </g>
                </g>
            </svg>
            <h2 className="home-subtitle">Welcome to the React Router Demo!</h2>
        </div>
    );
};

export default Home;