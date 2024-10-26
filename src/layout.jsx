import React from 'react';
import './styles/layout/styles.css';
import NavBar from './components/landing/NavBar';
import { SeccionParticipar } from './components/landing/seccion-3-participar';
import Section3 from './components/landing/Section3';
import { NewsLetterSection } from './components/landing/seccion-5-newsletter';
import { Seccion1Descubre } from './components/landing/seccion-1-descubre';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <Seccion1Descubre />
        <SeccionParticipar />
        <Section3 />
        <NewsLetterSection />
      </main>
    </>
  );
};
