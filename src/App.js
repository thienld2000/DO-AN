import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import {Restaurent, Booking, LoginSignup, Blog } from'./Pages';

const App = () => (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Restaurent/>}/>
      <Route path='/booking' element={<Booking/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/blog' element={<Blog/>}/>
    </Routes>
    
    </BrowserRouter>
    
    
  </div>
);

export default App;
