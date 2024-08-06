import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/home';
import MainPage from './components/booktable/mainPage';
import Header from './container/Header/Header';
import ThankYou from './container/Header/thankyou';
import SpecialMenu from './container/Menu/SpecialMenu';
import NoMoreItems from './container/Menu/NoMoreItems';
import MoreImages from './container/Gallery/MoreImages';
import ImagePage from './container/Findus/ImagePage';
import Register from './components/authenticate/Register';
import SignInComponent from './components/authenticate/Signin';
import Main from './components/booktable/main/main';
import BookingForm from './components/booktable/main/BookingForm';


const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignInComponent />} />
        <Route path="/book" element={<MainPage />} />
        <Route path="/header" element={<Header />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/special-menu" element={<SpecialMenu />} />
        <Route path="/no-more-items" element={<NoMoreItems />} />
        <Route path="/more-images" element={<MoreImages />} />
        <Route path="/image-page" element={<ImagePage />} />
        <Route path="/" element={<Main />} />
        <Route path="/BookingForm" element={<BookingForm />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;








