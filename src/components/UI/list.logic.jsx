import React, { useEffect, useState } from 'react';
import { ListPresentation } from './list.presentation';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunks } from '../../redux/slice/animals/thunks';
import { actions } from '../../redux/slice/animals/slice';

export const ListDogsAndCats = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [petNames, setPetNames] = useState([]);

  const {
    cats,
    dogs,
    currentPage,
    favoritesCats,
    favoritesDogs,
    status,
    cat,
    dog,
  } = useSelector((state) => state.animals);
  useEffect(() => {
    if (location.pathname === '/gatos') {
      dispatch(thunks.fetchCats({ page: currentPage }));
      dispatch(thunks.fetchFavoritesCats());
    } else if (location.pathname === '/perros') {
      dispatch(thunks.fetchDogs({ page: currentPage }));
      dispatch(thunks.fetchFavoritesDogs());
    }
  }, [currentPage, location.pathname]);

  const handleNextPage = async () => {
    dispatch(actions.setPage(currentPage + 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) dispatch(actions.setPage(currentPage - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPetById = (id) => {
    if (location.pathname === '/gatos') {
      dispatch(thunks.fetchCatById({ id }));
    } else if (location.pathname === '/perros') {
      dispatch(thunks.fetchDogById({ id }));
    }
  };

  return (
    <ListPresentation
      cats={cats}
      dogs={dogs}
      status={status}
      handlePreviousPage={handlePreviousPage}
      handleNextPage={handleNextPage}
      location={location}
      getPetById={getPetById}
      currentPage={currentPage}
      favoritesCats={favoritesCats}
      favoritesDogs={favoritesDogs}
      petNames={petNames}
    />
  );
};
