import React, { useEffect, useState } from 'react';
import { ListPresentation } from './list.presentation';
import CatService from '../../services/cat/CatService';
import DogService from '../../services/dog/DogService';
import { useLocation } from 'react-router-dom';
import NameService from '../../services/names/NameService';

export const ListDogsAndCats = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [petNames, setPetNames] = useState([]);
  const [favoritesData, setFavoritesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getApis = async () => {
      setData([]);
      setPetNames([]);
      setFavoritesData([]);
      setIsLoading(true);
      try {
        if (location.pathname === '/gatos') {
          const cats = await CatService.getCats();
          setData(cats);

          const favoritesCat = await CatService.getCatFavorites();
          setFavoritesData(favoritesCat);
        } else if (location.pathname === '/perros') {
          const dogs = await DogService.getDogs();
          setData(dogs);

          const favoritesDog = await DogService.getDogFavorites();
          setFavoritesData(favoritesDog);
        }

        const names = await NameService.getNames();
        setPetNames(names);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    getApis();
  }, [location.pathname]);

  const addFavoriteHandler = async (id) => {
    try {
      if (location.pathname === '/gatos') {
        await CatService.postCatFavorite({
          image_id: id,
          sub_id: 'my-user-1234',
        });
        const updatedFavoritesCats = await CatService.getCatFavorites();
        setFavoritesData(updatedFavoritesCats);
      } else {
        await DogService.postDogFavorite({
          image_id: id,
          sub_id: 'my-user-1234',
        });
        const updatedFavoritesDogs = await DogService.getDogFavorites();
        setFavoritesData(updatedFavoritesDogs);
      }
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
      location={location}
      addFavoriteHandler={addFavoriteHandler}
      favoritesData={favoritesData}
      petNames={petNames}
      isLoading={isLoading}
    />
  );
};
