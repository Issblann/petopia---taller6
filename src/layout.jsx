import Footer from './components/landing/footer';
import NavBar from './components/landing/NavBar';
import './styles/layout/styles.css';
export const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
