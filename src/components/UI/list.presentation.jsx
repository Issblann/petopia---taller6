import React from 'react';
import '../../styles/list/styles.css';
export const ListPresentation = ({
  data,
  addFavoriteHandler,
  favoritesCat,
}) => {
  console.log(data, 'api mascotas');
  console.log(favoritesCat, 'favoritos');
  return (
    <section className="list-section">
      <h1> LISTA </h1>
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
                {/* 
                <button
                  className="card-list--ver-detalles"
                  onClick={() => {
                    addFavoriteHandler(cat.id), console.log(cat.id);
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
