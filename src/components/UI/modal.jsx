import React, { useState } from 'react';
import '../../styles/modal/modal.css';
import { PiHeartFill, PiHeart } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { thunks } from '../../redux/slice/animals/thunks';
import { useLocation } from 'react-router-dom';

export const Modal = ({ isOpen, onClose, petDetails }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isFavorite, setIsFavorite] = useState(false);
  const { cat, dog } = useSelector((state) => state.animals);
  if (!isOpen) return null;
  const isCatsPage = location.pathname === '/gatos';
  const data = isCatsPage ? cat : dog;
  const addFavoriteHandler = (id) => {
    try {
      if (location.pathname === '/gatos') {
        dispatch(
          thunks.postFavoriteCat({
            favorite: { image_id: id, sub_id: 'my-user-1234' },
          })
        );
        dispatch(thunks.fetchFavoritesCats());
      } else if (location.pathname === '/perros') {
        dispatch(
          thunks.postFavoriteDog({
            favorite: { image_id: id, sub_id: 'my-user-1234' },
          })
        );
        dispatch(thunks.fetchFavoritesDogs());
      }
    } catch (error) {
      console.error(
        'Error adding favorite:',
        error.response?.data || error.message
      );
    }
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    const currentUrl = window.location.origin;
    const petId = petDetails?.id;
    const shareUrl = `${currentUrl}/pets/${petId}`;
    alert(`Compartir: ${shareUrl}`);
  };

  const handleMoreInfo = () => {
    alert(`Más información sobre: ${petDetails?.name}`);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <h2>Detalles de la Mascota</h2>
        <div className="modal-body">
          <div className="modal-image-container">
            <img
              src={data?.url}
              alt={data?.name}
              loading="lazy"
              className="modal-pet-image"
            />
            <div className="modal-heart" onClick={handleFavoriteToggle}>
              {isFavorite ? (
                <PiHeartFill size={30} color="#8645a0" />
              ) : (
                <PiHeart
                  size={30}
                  onClick={() => addFavoriteHandler(data.id)}
                />
              )}
            </div>
          </div>

          {data?.breeds?.map((breed) => (
            <div className="modal-pet-info" key={breed.id}>
              <h3>Raza: {breed?.name || 'Desconocida'}</h3>
              <p>Descripcion: {breed.description || 'No descripcion '}</p>
            </div>
          ))}
          <div className="modal-buttons"></div>
        </div>
      </div>
    </div>
  );
};
