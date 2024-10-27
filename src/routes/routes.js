import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CatList from './components/UI/CatList'; 
import DogList from './components/UI/DogList';
import Inicio from './src/layout'; 
import NotFound from './components/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/gatos" element={<CatList />} />
      <Route path="/perros" element={<DogList />} />
      <Route path="*" element={<NotFound />} /> {/* Página 404 */}
    </Routes>
  );
};

export default AppRoutes;