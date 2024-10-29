import React from 'react';
import { Seccion1Descubre } from './landing/seccion-1-descubre';
import { SeccionAdopcion } from './landing/seccion-2-adopcion';
import { SeccionParticipar } from './landing/seccion-3-participar';
import Section3 from './landing/Section3';
import { NewsLetterSection } from './landing/seccion-5-newsletter';

export const Home = () => {
  return (
    <>
      {/* <SeccionInicio /> */}
      <Seccion1Descubre />
      <SeccionAdopcion />
      <SeccionParticipar />
      <Section3 />
      <NewsLetterSection />
    </>
  );
};