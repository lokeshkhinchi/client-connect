import React from 'react';
import '../App.css';

import shapeOne from '../assets/ovalShape1.svg';
import shapeTwo from '../assets/ovalShape2.svg';
import Logo from '../assets/images/minato_logo.png'
const LandingPage = () => {
    return (
        <div className="container">
          <div className="image-container">
          <img src={shapeOne} alt="Logo" className='shape1' />
          <img src={shapeTwo} alt="Logo" className='shape2' />
          <img src={Logo} alt="Logo" className='logo' />

          </div>
          <div className="text-container">
            <h1 style={{ fontFamily: 'Fonseca, sans-serif', fontWeight: 'Bold', fontSize: '58px' }}>Minato 🍧 </h1>
            <h4 style={{ fontFamily: 'Sweetie-Summer, sans-serif', fontSize: '14px' }}>joyful scoops tranquil treats.</h4>
          </div>
        </div>
      );
};

export default LandingPage;
