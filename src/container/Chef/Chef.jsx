import React from 'react';
import { images} from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
   <div className='app__wrapper_img app__wrapper_img-reverse'>
   <img src={images.manchef}  style={{height:'1100px',width:'950px'}} alt='chef'/>
   {/* <img src={images.chef}/> */}
   </div>

   <div className='app__wrapper_info'>
    <SubHeading title="Chef's World"/>
    <h1 className='headtext__cormorant'>What We Believe In</h1>
    <div className='app__chef-content'>
    <div className='app__chef-content_quote'>
      <img src={images.quote} alt='quote'/>
      <p className='p__opensans'>Chefs are culinary virtuosos, orchestrating symphonies of flavor with every dish </p>
     </div>
     <p className='p__opensans'>Their mastery extends beyond the kitchen, embodying creativity, precision, and passion on a plate.
                                 With a flick of their knife and a dash of their imagination, they transform ingredients into edible art.
                                Behind every savory sensation lies their expertise, honed through years of dedication and experimentation</p>

    </div>
    <div className='app__chef-sign'>
      <p>Kevin Luo</p>
      <p className='p__opensans'>Chef & Founder</p>
      <img src={images.sign} alt='sign'/>

    </div>
   </div>
  </div>
);

export default Chef;
