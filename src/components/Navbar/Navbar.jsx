// import React, { useState } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import { Link } from 'react-router-dom';
// import images from '../../constants/images';

// import './Navbar.css';

// const Navbar = () => {

//   const [toggleMenu, setToggleMenu] = useState(false)
//   return (
//     <nav className='app__navbar'>
//       <div className='app__navbar-logo'>

//         <img src={images.icon} alt='app logo' />
//       </div>

//       <ul className='app__navbar-links'>
//         <li className='p__opensans'><a href='#home'>Home</a></li>
//         <li className='p__opensans'><a href='#about'>About</a></li>
//         <li className='p__opensans'><a href='#menu'>Menu</a></li>
//         <li className='p__opensans'><a href='#awards'>Awards</a></li>
//         <li className='p__opensans'><a href='#contact'>Contact</a></li>

//       </ul>


//       <div className='app__navbar-login'>

//         <Link to={"/Register"} className='p__opensans'>Log In / Register</Link>

//         <Link to={"/book "} className='p__opensans'>Book Table</Link>
//       </div> *

//       <div className="app__navbar-smallscreen">

//         <GiHamburgerMenu color="#fff" fontSize={47} onClick={() => setToggleMenu(true)}></GiHamburgerMenu>

//         {toggleMenu && (
//           <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
//             <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
//             <ul className='app__navbar-smallscreen_links'>

//               <li className='p__opensans'><a href='#home'>Home</a></li>
//               <li className='p__opensans'><a href='#about'>About</a></li>
//               <li className='p__opensans'><a href='#menu'>Menu</a></li>
//               <li className='p__opensans'><a href='#awards'>Awards</a></li>
//               <li className='p__opensans'><a href='#contact'>Contact</a></li>
//             </ul>
//           </div>
//         )}



//       </div>
//     </nav>
//   )
// }

// export default Navbar;



// import React, { useState, useEffect } from 'react';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { MdOutlineRestaurantMenu } from 'react-icons/md';
// import { Link, useNavigate } from 'react-router-dom';
// import { onAuthStateChanged, signOut } from 'firebase/auth';
// import { auth } from '../../firebaseconfig';
// import images from '../../constants/images';

// import './Navbar.css';

// const Navbar = () => {
//   const [toggleMenu, setToggleMenu] = useState(false);
//   const [user, setUser] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       setUser(null);  // Reset the user state
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };

//   return (
//     <nav className='app__navbar'>
//       <div className='app__navbar-logo'>
//         <img src={images.icon} alt='app logo' />
//       </div>

//       <ul className='app__navbar-links'>
//         <li className='p__opensans'><a href='#home'>Home</a></li>
//         <li className='p__opensans'><a href='#about'>About</a></li>
//         <li className='p__opensans'><a href='#menu'>Menu</a></li>
//         <li className='p__opensans'><a href='#awards'>Awards</a></li>
//         <li className='p__opensans'><a href='#contact'>Contact</a></li>
//       </ul>

//       <div className='app__navbar-login'>
//         {user ? (
//           <>
//             <span className='p__opensans user__name'>{user.displayName || user.email}</span>
//             <button className='logout__button' onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to={"/register"} className='p__opensans'>Log In / Register</Link>
//           </>
//         )}
//         <Link to={"/book"} className='p__opensans'>Book Table</Link>
//       </div>

//       <div className="app__navbar-smallscreen">
//         <GiHamburgerMenu color="#fff" fontSize={47} onClick={() => setToggleMenu(true)} />

//         {toggleMenu && (
//           <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
//             <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
//             <ul className='app__navbar-smallscreen_links'>
//               <li className='p__opensans'><a href='#home'>Home</a></li>
//               <li className='p__opensans'><a href='#about'>About</a></li>
//               <li className='p__opensans'><a href='#menu'>Menu</a></li>
//               <li className='p__opensans'><a href='#awards'>Awards</a></li>
//               <li className='p__opensans'><a href='#contact'>Contact</a></li>
//               {user ? (
//                 <>
//                   <li className='p__opensans'> {user.displayName || user.email}</li>
//                   <li className='p__opensans'><button className='logout__button' onClick={handleLogout}>Logout</button></li>
//                 </>
//               ) : (
//                 <>
//                   <li className='p__opensans'><Link to="/login">Log In</Link></li>
//                   <li className='p__opensans'><Link to="/register">Register</Link></li>
//                 </>
//               )}
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebaseconfig';
import images from '../../constants/images';

import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);  // Reset the user state
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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

      {/* <div className='app__navbar-login'>
        <Link to={"/book"} className='p__opensans'>Book Table</Link>
        {user ? (
          <div className="user__info">
            <span className='p__opensans user__name'>{user.displayName || user.email}</span>
            <button className='logout__button' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to={"/register"} className='p__opensans'>Log In / Register</Link>
        )}
      </div> */}

      <div className='app__navbar-login'>
        <Link to={"/book"} className='p__opensans'>Book Table</Link>
        {user ? (
          <div className="user__info">
            <span className='p__opensans user__name'>{user.displayName || user.email}</span>
            <button className='logout__button' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to={"/register"} className='p__opensans'>Log In / Register</Link>
        )}
      </div>


      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={47} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex_center slide-bottom'>
            <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => setToggleMenu(false)} />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#home'>Home</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#menu'>Menu</a></li>
              <li className='p__opensans'><a href='#awards'>Awards</a></li>
              <li className='p__opensans'><a href='#contact'>Contact</a></li>
              {user ? (
                <>
                  <li className='p__opensans'>{user.displayName || user.email}</li>
                  <li className='p__opensans'><button className='logout__button' onClick={handleLogout}>Logout</button></li>
                </>
              ) : (
                <>
                  <li className='p__opensans'><Link to="/login">Log In</Link></li>
                  <li className='p__opensans'><Link to="/register">Register</Link></li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
