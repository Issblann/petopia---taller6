import React, { useEffect, useState } from 'react';
import { ListPresentation } from './list.presentation';
import CatService from '../../services/cat/CatService';
import DogService from '../../services/dog/DogService';

export const ListDogsAndCats = () => {
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

  //este archivo se cambia, la idea es que haya un componente de logica para cada lista y usar la misma presentacion (UI).

  return <ListPresentation dogs={dogs} cats={cats} />;
};
