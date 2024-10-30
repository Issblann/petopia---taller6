import React, { useEffect, useState } from 'react';
import { ListPresentation } from './list.presentation';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunks } from '../../redux/slice/animals/thunks';
import { actions } from '../../redux/slice/animals/slice';
import { Modal } from './Modal';

export const ListDogsAndCats = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [petNames, setPetNames] = useState([]);

  const { cats, dogs, currentPage, favoritesCats, favoritesDogs, status } =
    useSelector((state) => state.animals);

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

  const addFavoriteHandler = (id) => {
    // Lógica para agregar favoritos
  };

  const openModal = (pet) => {
    setSelectedPet(pet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPet(null);
  };

  return (
    <>
      <ListPresentation
        cats={cats}
        dogs={dogs}
        status={status}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        addFavoriteHandler={addFavoriteHandler}
        location={location}
        currentPage={currentPage}
        favoritesCats={favoritesCats}
        favoritesDogs={favoritesDogs}
        openModal={openModal} // Pasar la función para abrir el modal
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} petDetails={selectedPet} />
    </>
  );
};
