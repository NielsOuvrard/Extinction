import React from 'react';
import Header from '../components/Header';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <h1>Welcome, user!</h1>
        </div>
    );
};

export default Home;