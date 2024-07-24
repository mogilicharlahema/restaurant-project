import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import Login from './components/login/login'; 
import SignIn from './sign/signin';
import MainPage from './components/booktable/mainPage';
import Header from './container/Header/Header';
import ThankYou from './container/Header/thankyou'; // Ensure this import is correct
import SpecialMenu from './container/Menu/SpecialMenu';
import NoMoreItems from './container/Menu/NoMoreItems';
import MoreImages from './container/Gallery/MoreImages';
import ImagePage from './container/Findus/ImagePage';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<MainPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/header" element={<Header />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/special-menu" element={<SpecialMenu />} />
        <Route path="/no-more-items" element={<NoMoreItems />} />
        <Route path="/more-images" element={<MoreImages />} />
        <Route path="/image-page" element={<ImagePage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;

