import React from 'react';
import '../../styles/list/styles.css';
export const ListPresentation = ({
  data,
  location,
  addFavoriteHandler,
  favoritesData,
}) => {
  console.log(data, 'api mascotas');
  console.log(favoritesData, 'favoritos');
  return (
    <section className="list-section">
      <h1 className="title-pet">
        {location.pathname === '/gatos'
          ? 'GATOS EN ADOPCIÓN'
          : 'PERROS EN ADOPCIÓN'}
      </h1>

      <ul className="list">
        {data.map((data) => (
          <li className="card-list--pet" key={data.id}>
            <img src={data.url} alt={data.id} />

            {data.breeds.map((breed) => (
              <div className="card-list__information" key={breed.id}>
                <h1>{breed.name}</h1>
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

                {/* <button
                  className="card-list--ver-detalles"
                  onClick={() => {
                    addFavoriteHandler(data.id), console.log(data.id);
                  }}
                >
                  Agregar a favoritos
                </button> */}
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};
