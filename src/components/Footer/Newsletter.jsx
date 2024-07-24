import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';
import Swal from 'sweetalert2';  // Import SweetAlert2
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email && emailPattern.test(email)) {
      setSubscribed(true);
      setEmail('');
      Swal.fire({
        title: 'Subscribed!',
        text: 'Thank you for subscribing to our newsletter!',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Please enter a valid email address.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="Newsletter" />
        <h1 className='headtext__cormorant'>Subscribe To Our Newsletter</h1>
        <p className='p__opensans'>And Never Miss Latest Updates!</p>
      </div>

      <div className='app__newsletter-input flex__center'>
        <input
          type='email'
          placeholder="Enter Your e-mail address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className='custom__button' onClick={handleSubscribe}>Subscribe</button>
      </div>

      {/* {subscribed && <p className='p__opensans'>Subscribed</p>} */}
    </div>
  );
};

export default Newsletter;
