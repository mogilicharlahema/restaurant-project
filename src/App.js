// import React from 'react';

// import './App.css';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Home from './components/Home/home';
// import Login from './components/login/login';

// import Book from './components/booktable/book';
// import SignIn from './components/login/signin';


// const App = () => (
//   <div>
//     <BrowserRouter>
//     <Routes> 
    
//         <Route path='/' component={Home}/>
//         <Route path='/login' component={Login}/> 
//         <Route path='/book' component={Book}/> 
//         <Route path='/signin' component={SignIn}/>
       
        
//     </Routes>
//     </BrowserRouter>
//   </div>
// );


// export default App


import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/login/login';
import Book from './components/booktable/book';
import SignIn from './sign/signin';


const App = () => (
  <div>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/book' element={<Book />} /> 
      
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
