import React, { useState } from 'react';
import '../../styles/modal/modal.css';
import { PiHeartFill, PiHeart } from 'react-icons/pi'; 

export const Modal = ({ isOpen, onClose, petDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false); 

  if (!isOpen) return null;

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleShare = () => {
    alert(`Compartir: ${petDetails?.name}`);
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
            <img src={petDetails?.url} alt={petDetails?.name} loading="lazy" className="modal-pet-image" />
            <div className="modal-heart" onClick={handleFavoriteToggle}>
              {isFavorite ? (
                <PiHeartFill size={30} color="#8645a0" />
              ) : (
                <PiHeart size={30} />
              )}
            </div>
          </div>
          <div className="modal-pet-info">
            <h3>{petDetails?.name}</h3>
            <p>Raza: {petDetails?.breed || 'Desconocida'}</p>
            <p>Temperamento: {petDetails?.temperament || 'Desconocido'}</p>
            <div className="modal-buttons">
              <button className="modal-button" onClick={handleMoreInfo}>Más Información</button>
              <button className="modal-button" onClick={handleShare}>Compartir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
