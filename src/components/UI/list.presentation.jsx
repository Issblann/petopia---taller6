import React from 'react';
import '../../styles/list/styles.css';
export const ListPresentation = ({
  dogs,
  cats,
  addFavoriteHandler,
  favouritesCat,
}) => {
  console.log(dogs, 'api perros desde lista');
  console.log(cats, 'api gatos desde lista');
  console.log(favouritesCat, 'favoritos');
  return (
    <section className="list-section">
      <h1> LISTA </h1>
      <ul className="list">
        {cats.map((cat) => (
          <li className="card-list--pet" key={cat.id}>
            <img src={cat.url} alt={cat.id} />

            {cat.breeds.map((breed) => (
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
