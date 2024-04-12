import React from 'react';
import {FiFacebook,FiTwitter,FiInstagram,} from 'react-icons/fi';

import { FooterOverlay,Newsletter } from '../../components';

import './Footer.css';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay/>
    <Newsletter />

    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>5 W 24th St, Munnar, Kerala </p>
        <p className='p__opensans'> +91 471 2307177</p>
        <p className='p__opensans'> +91 172 4232907</p>

      </div>

      <div className='app__footer-links_logo' >
       <h1 className='headtext__cormorant'>SAHEY</h1>
       <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
       <img src={images.spoon} alt='spoon' className='spoon__img' style={{marginTop:'15'}}/>
       <div className='app__footer-links_icons'>
        <FiFacebook/>
        <FiInstagram/>
       
        <FiTwitter/>

       </div>

      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'> 08.00am-12.00am</p>
        <p className='p__opensans'> Saturday-Sunday</p>
        <p className='p__opensans'> 07.00am-11.00am</p>
        

      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Sahey.All Rights reserved</p>
       
    </div>
   
  </div>
);

export default Footer;
