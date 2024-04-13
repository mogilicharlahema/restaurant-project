// import React from 'react';

// import { Navbar,NavbarBrand } from 'reactstrap';
 
// export default props=> {
//   return (
// <>
//     <Navbar color="light" light expand="md">
//       <NavbarBrand className='nav-brand' onClick={()=>{props.setPage(0)}}>

//         Dining Cabin
        
//       </NavbarBrand>
//       </Navbar>
      
// </>
    
//   )
// }

// export default Book


import React from 'react';
import { Navbar as ReactstrapNavbar, NavbarBrand } from 'reactstrap';

const Navbar = (props) => {
  return (
    <>
      <ReactstrapNavbar color="light" light expand="md">
        <NavbarBrand style={{fontSize:"3.5rem",color:"wheat",marginTop:"150px"}}  className='nav-brand' onClick={() => { props.setPage(0) }}>
        
      
          Dining Cabin
        </NavbarBrand>
      </ReactstrapNavbar>
    </>
  )
}

export default Navbar;
