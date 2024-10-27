import React from "react";
import "../../styles/list/styles.css";

export const ListPresentation = ({
  data,
  location,
  addFavoriteHandler,
  openModalHandler,
  favoritesData,
}) => {
  return (
    <section className="list-section">
      <h1 className="title-pet">
        {location.pathname === "/gatos"
          ? "GATOS EN ADOPCIÓN"
          : "PERROS EN ADOPCIÓN"}
      </h1>

      <ul className="list">
        {data.map((pet) => (
          <li className="card-list--pet" key={pet.id}>
            <img src={pet.url} alt={pet.id} />
            {pet.breeds.map((breed) => (
              <div className="card-list__information" key={breed.id}>
                <h1>{breed.name}</h1>
                {breed.temperament && (
                  <div className="card-list__breed-temperament">
                    {breed.temperament
                      .split(",")
                      .slice(0, 6)
                      .map((temperament) => (
                        <p key={temperament}>{temperament}</p>
                      ))}
                  </div>
                )}
                <button
                  className="card-list--ver-detalles"
                  onClick={() => openModalHandler({ ...pet, name: breed.name, temperament: breed.temperament })}
                >
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
