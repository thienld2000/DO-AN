import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Restaurent, Booking, Login, Register,Admin,XacNhan } from './Pages';
import { Dashboard, Khuyen_mai,Menu, Order } from './container-admin';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

  const PrivateRoute = ({ element, isAdmin }) => {
    return isAdmin ? element : <Navigate to="/" />;
  };

  const App = () => {
    const isAdmin = useSelector(state => state.auth.isAdmin);
    return (
    <div> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Restaurent />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin' element={<PrivateRoute element={<Admin />} isAdmin={isAdmin} /> }>
            <Route index element={<Dashboard />} />
            <Route path='menu' element={<Menu />} />
            <Route path='order' element={<Order/>} />
            <Route path='khuyen-mai' element={<Khuyen_mai/>} />
          </Route>
          <Route path='/xac-nhan' element={<XacNhan />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App;
