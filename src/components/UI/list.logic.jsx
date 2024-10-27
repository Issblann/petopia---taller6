import React, { useEffect, useState } from 'react';
import { ListPresentation } from './list.presentation';
import CatService from '../../services/cat/CatService';
import DogService from '../../services/dog/DogService';
import { useLocation } from 'react-router-dom';

export const ListDogsAndCats = () => {
  const location = useLocation();
  console.log(location.pathname);
  const [data, setData] = useState([]);
  const [cats, setCats] = useState([]);
  const [favoritesCat, setFavoritesCat] = useState([]);
  useEffect(() => {
    const getApis = async () => {
      if (location.pathname === '/gatos') {
        const cats = await CatService.getCats();
        setData(cats);

        const favoritesCat = await CatService.getCatFavorites();
        setFavoritesCat(favoritesCat);
      } else {
        const dogs = await DogService.getDogs();
        setData(dogs);
      }
    };

    getApis();
  }, [location.pathname]);

  const addFavoriteHandler = async (id) => {
    try {
      await CatService.postCatFavorite({
        image_id: id,
        sub_id: 'my-user-1234',
      });
      const updatedFavorites = await CatService.getCatFavorites();
      setFavoritesCat(updatedFavorites);
    } catch (error) {
      console.error(
        'Error adding favorite:',
        error.response?.data || error.message
      );
    }
  };

  return (
    <ListPresentation
      data={data}
      addFavoriteHandler={addFavoriteHandler}
      favoritesCat={favoritesCat}
    />
  );
};
