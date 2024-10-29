import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ListDogsAndCats } from '../components/UI/list.logic';
import { Home } from '../components/home';
import {Favorites} from '../components/UI/favorites';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gatos" element={<ListDogsAndCats />} />
      <Route path="/perros" element={<ListDogsAndCats />} />
      <Route path="/gatos/favoritos" element={<Favorites />} />
      <Route path="/perros/favoritos" element={<Favorites />} />
    </Routes>
  );
};

export default AppRoutes;
