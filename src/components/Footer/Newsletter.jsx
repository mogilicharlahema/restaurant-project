// import React from 'react';
// import SubHeading from '../SubHeading/SubHeading';

// import './Newsletter.css';

// const Newsletter = () => (
//   <div className='app__newsletter'>
//     <div className='app__newsletter-heading'>
//       <SubHeading title="NewsLetter" />
//       <h1 className='headtext__cormorant'>Subscribe To Our NewsLetter</h1>
//        <p className='p__opensans'>And Never Miss Latest Updates! </p>
//     </div>

//     <div className='app__newsletter-input flex__center'>
//       <input type="email" placeholder="Enter Your e-mail address"></input>
//       <button className='custom__button'>Subscribe</button>

//     </div>


//   </div>
// );

// export default Newsletter;



import React, { useState } from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <>

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

      {subscribed && <p className='p__opensans'>Subscribed</p>}
    </div>
    </>
  );
};

export default Newsletter;



