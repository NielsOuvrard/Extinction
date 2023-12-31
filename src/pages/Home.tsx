import React from 'react';
import Header from '../components/Header';
import './Home.scss';

import CaseImage from '../components/CaseImage';
import GroupCard from '../components/GroupCard';
import TryLibellule from './TryLibellule'

// * images case
import imageFirst from '../assets/first.png';
import imageSecond from '../assets/second.png';
import imageThird from '../assets/third.png';

import imageCoffee from '../assets/coffee.png';
import imageIndoor from '../assets/tree-indoor.png';

import myImage from '../assets/big_image.png';

// * images elements
import cercle from '../assets/cercle.svg';
import libellule from '../assets/libellule.png';

const Home: React.FC = () => {
    return (
        <div className="home">
            <Header />
            <h1 className="title">Home</h1>
            <h2 className="subtitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>

            <div className="home-comic">
                <GroupCard>
                    <CaseImage src={imageFirst} alt="Image alt text" />
                    <CaseImage src={imageSecond} alt="Image alt text" />
                    <CaseImage src={imageThird} alt="Image alt text" />
                </GroupCard>

                <GroupCard>
                    <CaseImage src={imageCoffee} alt="Image alt text" />
                    <CaseImage src={imageIndoor} alt="Image alt text" />
                </GroupCard>
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
                    <TryLibellule src={libellule} alt="Image alt text" class_name="libellule" />
                </CaseImage>

            </div>
        </div>
    );
};

export default Home;