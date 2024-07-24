


import React from 'react';
import { images } from '../../constants';
import './Thankyou.css';

const ThankYou = () => (
  <div className="thankyou__wrapper">
    <img src={images.menuimage} className="thankyou__image" alt='header img' />
    <div className="thankyou__text">
      <h1>Thank You for Exploring..!</h1>
      <p>We hope you enjoy your experience.</p>
    </div>
  </div>
);

export default ThankYou;


