// import React from 'react';

// import{images} from '../../constants'

// import './AboutUs.css';

// const AboutUs = () => (
//   <div className='app__aboutus app__bg flex__center section__padding' id='about'>
//   <div className='app__aboutus-overlay flex__center'>
  
//   </div>

//   <div className='app__aboutus-content flex__center'> 
//   <div className='app__aboutus-content_about'>
//     <h1 className="headtext__cormorant">About us</h1>
//     <img src={images.spoon}alt='spoon' className='spoon__img'></img>
//     <p className='p__opensans'>"Step into our restaurant, where each dish is a symphony of flavor, crafted with passion and precision to tantalize your taste buds.From sizzling grills to delicate desserts</p><br></br>
//     <button type='button' className='custom__button'>Know More</button>
//     </div>
//     <div className='app__aboutus-content_knife flex__center'>
//      <img src={images.knife} alt='about__knife'/>
//     </div>


//     <div className='app__aboutus-content_history'>
//     <h1 className='headtext__cormorant'>Our History</h1>
//     <img src={images.spoon}alt='spoon' className='spoon__img'></img>
//     <p className='p__opensans'>Embark on a culinary journey where flavors dance on your palate, each dish a masterpiece crafted with passion and precision</p><br></br>
//     <button type='button' className='custom__button'>Know More</button>
//     </div>




  
// </div>
// </div>
// );

// export default AboutUs;


import React, { useState } from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  const handleKnowMoreAboutClick = () => {
    setShowMoreAbout(!showMoreAbout);
  };

  const handleKnowMoreHistoryClick = () => {
    setShowMoreHistory(!showMoreHistory);
  };

  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className='app__aboutus-overlay flex__center'></div>
      <div className='app__aboutus-content flex__center'>
        <div className='app__aboutus-content_about'>
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img' />
          <p className='p__opensans'>"Step into our restaurant, where each dish is a symphony of flavor, crafted with passion and precision to tantalize your taste buds. From sizzling grills to delicate desserts.</p>
          {showMoreAbout && (
            <p className='p__opensans'>
              Our chefs bring years of expertise to the table, ensuring every meal is a delightful experience. We source the freshest ingredients to create dishes that not only satisfy hunger but also create lasting memories.
            </p>
          )}
          <button type='button' className='custom__button' onClick={handleKnowMoreAboutClick}>
            {showMoreAbout ? 'Show Less' : 'Know More'}
          </button>
        </div>

        <div className='app__aboutus-content_knife flex__center'>
          <img src={images.knife} alt='about__knife' />
        </div>

        <div className='app__aboutus-content_history'>
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src={images.spoon} alt='spoon' className='spoon__img' />
          <p className='p__opensans'>Embark on a culinary journey where flavors dance on your palate, each dish a masterpiece crafted with passion and precision.</p>
          {showMoreHistory && (
            <p className='p__opensans'>
              Our story began decades ago, with a vision to bring the world's finest flavors to your table. Through dedication and a commitment to excellence, we have grown into a beloved dining destination.
            </p>
          )}
          <button type='button' className='custom__button' onClick={handleKnowMoreHistoryClick}>
            {showMoreHistory ? 'Show Less' : 'Know More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
