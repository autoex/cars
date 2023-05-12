import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import CarDetail from '../pages/carDetail/CarDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        />
        <Route
          path='/car/:id'
          element={<CarDetail />}
        />
        <Route
          path='*'
          element={<div>Nothing found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
