import Footer from './components/landing/footer';
import NavBar from './components/landing/NavBar';
<<<<<<< HEAD
import './styles/layout/styles.css';
=======
//import { SeccionInicio } from './components/landing/SeccionInicio';
//import { SeccionAdopta } from './components/landing/SeccionAdopta';
import { SeccionParticipar } from './components/landing/seccion-3-participar';
import Section3 from './components/landing/Section3';
import { NewsLetterSection } from './components/landing/seccion-5-newsletter';
import { Seccion1Descubre } from './components/landing/seccion-1-descubre';
import { SeccionAdopcion } from './components/landing/seccion-2-adopcion';
>>>>>>> 1eb480be319c8e22b675bc85cf05a2c33738775d

export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
