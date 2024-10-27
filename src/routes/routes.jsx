import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ListDogsAndCats } from '../components/UI/list.logic';
import { Home } from '../components/home';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gatos" element={<ListDogsAndCats />} />
      <Route path="/perros" element={<ListDogsAndCats />} />
    </Routes>
  );
};

export default AppRoutes;
