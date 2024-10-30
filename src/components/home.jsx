import React from 'react';
import { Seccion1Descubre } from './landing/Seccion-1-descubre';
import { SeccionAdopcion } from './landing/Seccion-2-adopcion';
import { SeccionParticipar } from './landing/Seccion-3-participar';
import { SeccionConectando } from './landing/Section-4-conectando';
import { NewsLetterSection } from './landing/Seccion-5-newsletter';
import { Hero } from './landing/Hero';

export const Home = () => {
  return (
    <>
      <Hero />
      <Seccion1Descubre />
      <SeccionAdopcion />
      <SeccionParticipar />
      <SeccionConectando />
      <NewsLetterSection />
    </>
  );  
};
