import React, { useState } from 'react';
import '../../styles/list/styles.css';
import {
  PiArrowLeftDuotone,
  PiArrowRightDuotone,
  PiHeartFill,
} from 'react-icons/pi';
import { Modal } from '../../components/UI/Modal';
import { useNavigate } from 'react-router-dom';

export const ListPresentation = ({
  cats,
  dogs,
  location,
  getPetById,
  addFavoriteHandler,
  handlePreviousPage,
  handleNextPage,
  favoritesCats,
  favoritesDogs,
  petNames,
  currentPage,
  status,
}) => {
  const isCatsPage = location.pathname === '/gatos';
  const data = isCatsPage ? cats : dogs;
  const favoritesData = isCatsPage ? favoritesCats : favoritesDogs;

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetData, setSelectedPetData] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPetData(null);
  };

  const handleRedirect = () => {
    const path = isCatsPage ? '/gatos/favoritos' : '/perros/favoritos';
    navigate(path);
  };

  return (
    <section className="list-section">
      {status === 'loading' && (
        <div className="loading">
          <p>Cargando datos de mascotas...</p>
        </div>
      )}
      {status === 'failed' && (
        <div className="error">
          <p>Error al traer la data de mascotas</p>
        </div>
      )}
      {data.length === 0 && (
        <div className="loading">
          <p>No hay datos de mascotas en este momento</p>
        </div>
      )}
      <h1 className="title-pet">
        {location.pathname === '/gatos'
          ? 'GATOS EN ADOPCIÓN'
          : 'PERROS EN ADOPCIÓN'}
      </h1>
      <div className="favorites-button-container">
        <button className="button-favorites" onClick={handleRedirect}>
          <PiHeartFill size={35} color="#8645a0" />
          Ver favoritos <span>({favoritesData.length})</span>
        </button>
      </div>
      <ul className="list">
        {data.map((pet, i) => {
          const petName = petNames[i];
          return (
            <li className="card-list--pet" key={pet.id}>
              <img src={pet.url} alt={pet.id} loading="lazy" />

              {pet.breeds.map((breed) => (
                <div className="card-list__information" key={breed.id}>
                  {pet ? <h1>{petName?.firstName}</h1> : ''}
                  <p>{breed.name}</p>

                  {breed.temperament && (
                    <div className="card-list__breed-temperament">
                      {breed.temperament
                        .split(',')
                        .slice(0, 6)
                        .map((temperament) => (
                          <p key={temperament}>{temperament}</p>
                        ))}
                    </div>
                  )}

                  <button
                    className="card-list--ver-detalles"
                    onClick={() => {
                      openModal(), getPetById(pet.id);
                    }}
                  >
                    Ver detalles
                  </button>
                </div>
              ))}
            </li>
          );
        })}
      </ul>

      <div className="pagination-list">
        <button
          onClick={() => handlePreviousPage()}
          className={`arrow-container ${currentPage === 0 ? 'disabled' : ''}`}
        >
          <PiArrowLeftDuotone size={25} color="#8645a0" />
        </button>

        <p>{currentPage === 0 ? 'Principal' : currentPage}</p>
        <button className="arrow-container" onClick={() => handleNextPage()}>
          <PiArrowRightDuotone size={25} color="#8645a0" />
        </button>
      </div>

      {/* Aquí renderizamos el modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        petDetails={selectedPetData}
      />
    </section>
  );
};
