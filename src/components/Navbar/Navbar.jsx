// import React, { useState } from 'react';
// import {GiHamburgerMenu} from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import images from '../../constants/images';

// import './Navbar.css';

// const Navbar = () => {

//   const [toggleMenu , setToggleMenu]= useState(false)
//   return(
//   <nav className='app__navbar'>
//    <div className='app__navbar-logo'>

//     <img src={images.icon} alt='app logo'/>
//    </div>

//    <ul className='app__navbar-links'>
//     <li className='p__opensans'><a href='#home'>Home</a></li>
//     <li className='p__opensans'><a href='#about'>About</a></li>
//     <li className='p__opensans'><a href='#menu'>Menu</a></li>
//     <li className='p__opensans'><a href='#awards'>Awards</a></li>
//     <li className='p__opensans'><a href='#contact'>Contact</a></li>

//    </ul>

 
//     <div className='app__navbar-login'>
   
//    <Link to={"/login "}className='p__opensans'>Log In / Register</Link>
  
//    <Link to={"/book "}className='p__opensans'>Book Table</Link>
//    </div> *





//    <div className="app__navbar-smallscreen">

//      <GiHamburgerMenu color="#fff" fontSize={47} onClick={()=>setToggleMenu(true)}></GiHamburgerMenu>

//      {toggleMenu && (
//     <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
//       <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={()=>setToggleMenu(false)}/>
//       <ul className='app__navbar-smallscreen_links'>

//     <li className='p__opensans'><a href='#home'>Home</a></li>
//     <li className='p__opensans'><a href='#about'>About</a></li>
//     <li className='p__opensans'><a href='#menu'>Menu</a></li>
//     <li className='p__opensans'><a href='#awards'>Awards</a></li>
//     <li className='p__opensans'><a href='#contact'>Contact</a></li>
//    </ul>
//    </div>
// )}



// </div>
//   </nav>
// )
//   }

// export default Navbar;







import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.icon} alt='app logo' />
      </div>

      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>

      <div className='app__navbar-login'>
        <Link to="/login" className='p__opensans'>Log In / Register</Link>
        <Link to="/book" className='p__opensans'>Book Table</Link>
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='p__opensans'><a href='#menu' onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className='p__opensans'><a href='#awards' onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li className='p__opensans'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
              <li className='p__opensans'><Link to="/login" onClick={() => setToggleMenu(false)}>Log In / Register</Link></li>
              <li className='p__opensans'><Link to="/book" onClick={() => setToggleMenu(false)}>Book Table</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


