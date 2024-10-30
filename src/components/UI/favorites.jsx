import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { thunks } from '../../redux/slice/animals/thunks';
import { FaTrash } from 'react-icons/fa';
import { PiArrowLeftDuotone, PiArrowRightDuotone } from 'react-icons/pi';
import '../../styles/list/styles.css';

export const Favorites = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const favoritesCats = useSelector((state) => state.animals.favoritesCats);
  const favoritesDogs = useSelector((state) => state.animals.favoritesDogs);
  const status = useSelector((state) => state.animals.status);
  const error = useSelector((state) => state.animals.error);

  useEffect(() => {
    if (location.pathname.includes('/gatos')) {
      dispatch(thunks.fetchFavoritesCats());
    } else if (location.pathname.includes('/perros')) {
      dispatch(thunks.fetchFavoritesDogs());
    }
  }, [dispatch, location.pathname]);

  useEffect(() => {}, [favoritesCats, favoritesDogs]);

  const handleRemoveFavorite = (id) => {
    if (location.pathname.includes('/gatos'))
      dispatch(thunks.removeFavoriteCat({ id, path: location.pathname }));
    else if (location.pathname.includes('/perros')) {
      dispatch(thunks.removeFavoriteCat({ id, path: location.pathname }));
    }
  };

  if (status === 'loading') {
    return <div className="loading">Cargando datos de mascotas...</div>;
  }

  if (status === 'failed') {
    return <div className="error">Error: {error}</div>;
  }

  const favorites = location.pathname.includes('/gatos')
    ? favoritesCats
    : favoritesDogs;

  if (!favorites || favorites.length === 0) {
    return (
      <div className="no-data">No hay mascotas favoritas en este momento.</div>
    );
  }

  return (
    <section className="list-section">
      <h1 className="title-pet">
        {location.pathname.includes('/gatos')
          ? 'GATOS FAVORITOS'
          : 'PERROS FAVORITOS'}
      </h1>
      <ul className="list">
        {favorites.map((favorite) => (
          <li className="card-list--pet" key={favorite.id}>
            <img
              src={favorite.image?.url}
              alt={`Favorito ${favorite.id}`}
              loading="lazy"
            />
            <div className="card-list__information">
              <h1>{favorite.breed?.name}</h1>
              <button
                className="card-list--ver-detalles"
                onClick={() => handleRemoveFavorite(favorite.id)}
              >
                <FaTrash /> Eliminar
              </button>
            </div>
          </li>
        ))}
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
    </section>
  );
};
