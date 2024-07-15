
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';

import './Footer.css';
import { images } from '../../constants';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => (

  // const linkedinUrl ="https://www.linkedin.com/in/hema-mogilicharla-7456782a4/";
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />




    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>5 W 24th St, AshokNagar, Hyderabad</p>
        <p className='p__opensans'> +91 949  4602714</p>
        <p className='p__opensans'> +91 994  9321724</p>
      </div>
      {/* <a href='https://www.w3schools.com' target="_blank" alt="a" style={{"color":"red"}}   rel="noopener noreferrer"  onClick={(e) => {
  
    console.log('Link clicked');
  }}>click me</a> */}
      <div className='app__footer-links_logo'>
        <h1 className='headtext__cormorant'>SAHEY</h1>
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others"</p>
        <img src={images.spoon} alt='spoon' className='spoon__img' style={{ marginTop: '15px' }} />
        <div className='app__footer-links_icons'>
          {/* <Link to={"https://www.linkedin.com/in/hema-mogilicharla-7456782a4"}><i className='linkedin-icon'></i></Link> */}
          {/* <Link to={"https://www.linkedin.com/in/hema-mogilicharla-7456782a4/"}><i className='FiLinkedin '></i></Link> */}
          <a href="https://www.linkedin.com/in/hema-mogilicharla-7456782a4/" target="_blank" rel="noopener noreferrer">
            <FiLinkedin />
          </a>
          <a href='https://github.com/mogilicharlahema 'target='_blank' >
            <FiGithub />
          </a>
          <a href='https://twitter.com' target='_blank' >
            <FiTwitter />
          </a>
          <a href='https://facebook.com' target='_blank' >
            <FiFacebook />
          </a>
          <a href='https://instagram.com' target='_blank' >
            <FiInstagram />
          </a>
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
        <p className='p__opensans'>Monday-Friday</p>
        <p className='p__opensans'> 10.00am-11.00pm</p>
        <p className='p__opensans'> Saturday-Sunday</p>
        <p className='p__opensans'> 10.00am-12.00am</p>
      </div>
    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Sahey. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;



