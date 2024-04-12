import React from 'react';

import{images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
  <div className='app__aboutus-overlay flex__center'>
   

   {/* <img src={images.letter}style={{height:"700px",}} alt ="sh"/>  */}
  </div>

  <div className='app__aboutus-content flex__center'> 
  <div className='app__aboutus-content_about'>
    <h1 className="headtext__cormorant">About us</h1>
    <img src={images.spoon}alt='spoon' className='spoon__img'></img>
    <p className='p__opensans'>"Step into our restaurant, where each dish is a symphony of flavor, crafted with passion and precision to tantalize your taste buds.From sizzling grills to delicate desserts</p><br></br>
    <button type='button' className='custom__button'>Know More</button>
    </div>
    <div className='app__aboutus-content_knife flex__center'>
     <img src={images.knife} alt='about__knife'/>
    </div>


    <div className='app__aboutus-content_history'>
    <h1 className='headtext__cormorant'>Our History</h1>
    <img src={images.spoon}alt='spoon' className='spoon__img'></img>
    <p className='p__opensans'>Embark on a culinary journey where flavors dance on your palate, each dish a masterpiece crafted with passion and precision</p><br></br>
    <button type='button' className='custom__button'>Know More</button>
    </div>




  
</div>
</div>
);

export default AboutUs;
