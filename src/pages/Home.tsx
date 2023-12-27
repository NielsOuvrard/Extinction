import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <h1 className="home-text">Home</h1>
        </div>
    );
};

export default Home;