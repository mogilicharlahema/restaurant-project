


import React from 'react';
import { Navbar as ReactstrapNavbar, NavbarBrand } from 'reactstrap';

const Navbar = (props) => {
  return (
    <>
      <ReactstrapNavbar color="light" light expand="md">
        <NavbarBrand style={{fontSize:"3.5rem",color:"blue",marginTop:"150px"}}  className='nav-brand' onClick={() => { props.setPage(0) }}>
        
      
         happy Dining Cabin
        </NavbarBrand>
      </ReactstrapNavbar>
    </>
  )
}

export default Navbar;
