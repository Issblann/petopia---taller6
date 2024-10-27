import React from "react";
import "../../styles/modal/modal.css";

const Modal = ({ isOpen, onClose, petDetails }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          <img className="pet-image" src={petDetails.url} alt={petDetails.name} />
          <div className="pet-info">
            <h2>{petDetails.name}</h2>
            <p>{petDetails.temperament}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
