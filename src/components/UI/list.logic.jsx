import React, { useEffect, useState } from 'react';
import { ListPresentation } from './list.presentation';
import CatService from '../../services/cat/CatService';
import DogService from '../../services/dog/DogService';

export const ListDogsAndCats = () => {
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [favouritesCat, setFavouritesCat] = useState([]);
  useEffect(() => {
    const getApis = async () => {
      const cats = await CatService.getCats();
      setCats(cats);

      const favouritesCat = await CatService.getCatFavourites();
      setFavouritesCat(favouritesCat);

      const dogs = await DogService.getDogs();
      setDogs(dogs);
    };

    getApis();
  }, []);

  const addFavoriteHandler = async (id) => {
    try {
      await CatService.postCatFavourite({
        image_id: id,
        sub_id: 'my-user-1234',
      });
      // Optionally update favouritesCat state if needed
      const updatedFavourites = await CatService.getCatFavourites();
      setFavouritesCat(updatedFavourites);
    } catch (error) {
      console.error(
        'Error adding favorite:',
        error.response?.data || error.message
      );
    }
  };

  //este archivo se cambia, la idea es que haya un componente de logica para cada lista y usar la misma presentacion (UI).

  return (
    <ListPresentation
      dogs={dogs}
      cats={cats}
      addFavoriteHandler={addFavoriteHandler}
      favouritesCat={favouritesCat}
    />
  );
};
