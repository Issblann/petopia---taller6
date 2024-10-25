import React, { useState, useEffect } from 'react';
import './styles/layout/styles.css';
import NavBar from './components/landing/NavBar';
import CatService from './services/cat/CatService';
import DogService from './services/dog/DogService';
import { SeccionParticipar } from './components/landing/seccion-3-participar';
import Section3 from './components/landing/Section3';
import { NewsLetterSection } from './components/landing/seccion-5-newsletter';

export const Layout = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getApis = async () => {
      const cats = await CatService.getCats();
      setCats(cats);

      const dogs = await DogService.getDogs();
      setDogs(dogs);
    };

    getApis();
  }, []);

  console.log(dogs, 'api perros');
  console.log(cats, 'api gatos');
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <SeccionParticipar />
        <Section3 />
        <NewsLetterSection />
      </main>
    </>
  );
};
