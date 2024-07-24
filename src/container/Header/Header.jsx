import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  const handleExploreMenuClick = () => {
    navigate('/thank-you');
  };

  return (
    <div className='app__header__app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new flavour" />
        <h1 className='app__header-h1'>The Key to Fine Dining</h1>
        <p className='p__opensans' style={{ margin: '2rem 0', fontSize: '30px', fontStyle: 'oblique', gap: '5px' }}>
          "Indulge in a culinary adventure at our fantastic restaurant, where every dish is crafted with passion and every moment is savored with delight."
        </p>
        <button type='button' className='custom__button' onClick={handleExploreMenuClick}>
          Explore Menu
        </button>
      </div>

      <div className='app__wrapper_img'>
        {/* <img src={images.welcome} alt='header img'/> */}
        <img src={images.chicken} style={{ borderRadius: '10px' }} alt='header img' />
      </div>
    </div>
  );
};

export default Header;
