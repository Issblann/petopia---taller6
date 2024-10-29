import Footer from './components/landing/footer';
import NavBar from './components/landing/NavBar';
import './styles/layout/styles.css';
import SVG1 from './assets/vectors/svg1.svg';
import SVG2 from './assets/vectors/svg2.svg';
import SVG3 from './assets/vectors/svg3.svg';
export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>
        {children}
        <div className="svg1">
          <img src={SVG1} alt="svg1" />
        </div>
        <div className="svg2">
          <img src={SVG2} alt="svg2" />
        </div>
        <div className="svg3">
          <img src={SVG3} alt="svg2" />
        </div>
      </main>
      <Footer />
    </>
  );
};
