// src/components/FindUs/FindUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const handleVisitUsClick = () => {
    navigate('/image-page');  // Correct path for navigation
  };

  return (
    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info'>
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant' style={{ marginBottom: '3rem' }}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>AshokNagar, Hyderabad</p>
          <p className='p__cormorant' style={{ color: "#DCCA87", margin: '2rem 0' }}>Opening Hours</p>
          <p className='p__opensans'>Mon-Fri: 10.00am - 02.00am</p>
          <p className='p__opensans'>Sat-Sun: 10.00am - 10.00pm</p>
        </div>
        <button className='custom__button' style={{ marginTop: '2rem' }} onClick={handleVisitUsClick}>
          Visit Us
        </button>
      </div>
      <div className='app__wrapper_img'>
        <img src={images.bar} style={{ height: '600px', width: '600px', borderRadius: '20px' }} alt='bar' />
      </div>
    </div>
  );
};

export default FindUs;
