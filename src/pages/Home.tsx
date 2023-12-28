import React from 'react';
import Header from '../components/Header';
import './Home.scss';
import CaseImage from '../components/CaseImage';
import imageCoffee from '../assets/coffee.png';
import imageIndoor from '../assets/tree-indoor.png';
import myImage from '../assets/big_image.png';
import cercle from '../assets/cercle.svg';


const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <h1 className="title">Home</h1>
            <h2 className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>


            <div className="home-comic">

                <CaseImage src={imageCoffee} alt="Image alt text">
                </CaseImage>
                <CaseImage src={imageIndoor} alt="Image alt text">
                </CaseImage>
                <CaseImage src={myImage} alt="Image alt text">
                    <img src={cercle} className="flashing circle" alt="logo" style={{
                        top: '50%',
                        left: '2.5%',
                        position: 'absolute',
                        width: '10%'
                    }} />
                    <img src={cercle} className="flashing circle" alt="logo" style={{
                        top: '35%',
                        left: '15%',
                        position: 'absolute',
                        width: '10%'
                    }} />
                </CaseImage>
            </div>
        </div>
    );
};

export default Home;