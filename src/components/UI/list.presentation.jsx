import React, { useState } from 'react';
import '../../styles/list/styles.css';
import {
  PiArrowLeftDuotone,
  PiArrowRightDuotone,
  PiHeartFill,
} from 'react-icons/pi';
import { Modal } from '../../components/UI/Modal';

export const ListPresentation = ({
  data,
  location,
  addFavoriteHandler,
  favoritesData,
  petNames,
  isLoading,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPetData, setSelectedPetData] = useState(null);

  const openModal = (petData) => {
    setSelectedPetData(petData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPetData(null);
  };

  if (isLoading) {
    return (
      <div className="loading">
        <p>Cargando datos de mascotas...</p>
      </div>
    );
  }

  return (
    <section className="list-section">
      <h1 className="title-pet">
        {location.pathname === '/gatos'
          ? 'GATOS EN ADOPCIÓN'
          : 'PERROS EN ADOPCIÓN'}
      </h1>
      <div className="favorites-button-container">
        <button className="button-favorites">
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
                    onClick={() => openModal({ 
                      id: pet.id, 
                      url: pet.url, 
                      name: petName?.firstName, 
                      breed: breed.name, 
                      temperament: breed.temperament 
                    })}
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
        <div className="arrow-container disabled">
          <PiArrowLeftDuotone size={25} color="#8645a0" />
        </div>

        <p>1</p>
        <div className="arrow-container">
          <PiArrowRightDuotone size={25} color="#8645a0" />
        </div>
      </div>

      {/* Aquí renderizamos el modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} petDetails={selectedPetData} />
    </section>
  );
};
