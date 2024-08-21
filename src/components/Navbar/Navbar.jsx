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

      <div className='app__navbar-login'>
        <Link to="/book" className='p__opensans'>Book Table</Link>
        {user ? (
          <div className="user__info">
            <span className='p__opensans user__name'>{user.displayName || user.email}</span>
            <button className='logout__button' onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/register" className='p__opensans'>Log In / Register</Link>
        )}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay'>
            <MdOutlineRestaurantMenu 
              fontSize={27} 
              className="app__navbar-smallscreen-close" 
              onClick={() => setToggleMenu(false)} 
            />
            <ul className='app__navbar-smallscreen-links'>
              <li className='p__opensans'><a href='#home' onClick={() => setToggleMenu(false)}>Home</a></li>
              <li className='p__opensans'><a href='#about' onClick={() => setToggleMenu(false)}>About</a></li>
              <li className='p__opensans'><a href='#menu' onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li className='p__opensans'><a href='#awards' onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li className='p__opensans'><a href='#contact' onClick={() => setToggleMenu(false)}>Contact</a></li>
              {user ? (
                <>
                  <li className='p__opensans'>{user.displayName || user.email}</li>
                  <li className='p__opensans'>
                    <button className='logout__button' onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className='p__opensans'><Link to="/login" onClick={() => setToggleMenu(false)}>Log In</Link></li>
                  <li className='p__opensans'><Link to="/register" onClick={() => setToggleMenu(false)}>Register</Link></li>
                </>
              )
              }
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
