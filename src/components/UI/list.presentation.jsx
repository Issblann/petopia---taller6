import React from 'react';
import '../../styles/list/styles.css';
import {
  PiArrowLeftDuotone,
  PiArrowRightDuotone,
  PiHeartFill,
} from 'react-icons/pi';
export const ListPresentation = ({
  cats,
  dogs,
  location,
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

  if (status === 'loading') {
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
        {data &&
          data.map((data, i) => {
            const petName = petNames[i];
            return (
              <li className="card-list--pet" key={data.id}>
                <img src={data.url} alt={data.id} loading="lazy" />

                {data.breeds.map((breed) => (
                  <div className="card-list__information" key={breed.id}>
                    {data ? <h1>{petName?.firstName}</h1> : ''}
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

                    <button className="card-list--ver-detalles">
                      Ver detalles
                    </button>

                    <button
                      className="card-list--ver-detalles"
                      onClick={() => {
                        addFavoriteHandler(data.id), console.log(data.id);
                      }}
                    >
                      Agregar a favoritos
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
    </section>
  );
};
