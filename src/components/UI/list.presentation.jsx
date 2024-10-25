import React from 'react';
import '../../styles/list/styles.css';
export const ListPresentation = ({ dogs, cats }) => {
  console.log(dogs, 'api perros desde lista');
  console.log(cats, 'api gatos desde lista');
  return (
    <section className="list-section">
      <h1> LISTA </h1>
      <ul className="list">
        {dogs.map((dog) => (
          <li className="card-list--pet" key={dog.id}>
            <img src={dog.url} alt={dog.id} />

            {dog.breeds.map((breed) => (
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
              </div>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};
