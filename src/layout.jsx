import React from 'react';
import './styles/layout/styles.css';
import NavBar from './components/landing/NavBar';
import { SeccionParticipar } from './components/landing/seccion-3-participar';
import Section3 from './components/landing/Section3';
import { NewsLetterSection } from './components/landing/seccion-5-newsletter';
import { SeccionAdopcion } from './components/landing/seccion-2-adopcion';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <SeccionAdopcion />
        <SeccionParticipar />
        <Section3 />
        <NewsLetterSection />
      </main>
    </>
  );
};
