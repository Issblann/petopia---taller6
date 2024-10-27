import React, { useState, useEffect } from 'react';
import './styles/layout/styles.css';
import NavBar from './components/landing/NavBar';
import CatService from './services/cat/CatService';
import DogService from './services/dog/DogService';
import { SeccionParticipar } from './components/landing/seccion-3-participar';
import Section3 from './components/landing/Section3';
import { NewsLetterSection } from './components/landing/seccion-5-newsletter';
import { ListDogsAndCats } from './components/UI/list.logic';
import { Seccion1Descubre } from './components/landing/seccion-1-descubre';
import { SeccionAdopcion } from './components/landing/seccion-2-adopcion';

export const Layout = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);

  const [cat, setCat] = useState(null);
  useEffect(() => {
    const getApis = async () => {
      const cats = await CatService.getCats();
      setCats(cats);

      const dogs = await DogService.getDogs();
      setDogs(dogs);

      const cat = await CatService.getCatById('xnzzM6MBI'); //aqui pasamos el id del gato seleccionado (modal)
      setCat(cat);
    };

    getApis();
  }, []);

  // console.log(dogs, 'api perros');
  // console.log(cats, 'api gatos');
  // console.log(cat, 'api gato');
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        {/* <SeccionInicio /> */}
        <Seccion1Descubre />
        <SeccionAdopcion />
        <SeccionParticipar />
        <Section3 />
        <NewsLetterSection />
        <ListDogsAndCats />
      </main>
    </>
  );
};
