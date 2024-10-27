import React from 'react';
import './styles/layout/styles.css';
import NavBar from './components/landing/NavBar';
//import { SeccionInicio } from './components/landing/SeccionInicio';
//import { SeccionAdopta } from './components/landing/SeccionAdopta';
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
        {/* <section id="inicio">
          <SeccionInicio />
        </section>
        <section id="adopta">
          <SeccionAdopta />
        </section> */}
        <Seccion1Descubre />
        <section id="participar">
          <SeccionParticipar />
          <Section3 />
        </section>
        <section id="noticias">
          <NewsLetterSection />
        </section>
      </main>
    </>
  );
};
