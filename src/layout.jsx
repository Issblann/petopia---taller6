import './styles/layout/styles.css';
import NavBar from './components/landing/NavBar';
//import { SeccionInicio } from './components/landing/SeccionInicio';
//import { SeccionAdopta } from './components/landing/SeccionAdopta';
import { SeccionParticipar } from './components/landing/seccion-3-participar';
import Section3 from './components/landing/Section3';
import { NewsLetterSection } from './components/landing/seccion-5-newsletter';
import { Seccion1Descubre } from './components/landing/seccion-1-descubre';
import { SeccionAdopcion } from './components/landing/seccion-2-adopcion';
import Hero from './components/landing/hero';

export const Layout = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/* <SeccionInicio /> */}
        <Hero/>
        <Seccion1Descubre />
        <SeccionAdopcion />
        <SeccionParticipar />
        <Section3 />
        <NewsLetterSection />
      </main>
    </>
  );
};
