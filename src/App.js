import React from 'react'
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import ServicesMain from './Pages/ServicesMain';
import ContactUs from './Pages/ContactUs';
function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home />}/> 
    <Route path='/about' element={<AboutUs />}/> 
    <Route path='/services' element={<ServicesMain />}/> 
    <Route path='/contact' element={<ContactUs />}/> 
    </Routes>
    </>
  );
}

export default App;
