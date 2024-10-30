import React from 'react';
import '../../styles/seccion-4-conectando/styles.css';
import image1 from '../../assets/images/image1.png';
import image2 from '../../assets/images/image2.png';
import image3 from '../../assets/images/image3.png';

export const SeccionConectando = () => {
  return (
    <section className="section-container">
      <div className="text-container">
        <h1 className="section-title">Conectando humanos con sus mascotas</h1>
        <p className="section-description">
          Las mascotas no solo son compañeros; son parte de nuestra familia.
          Conectar con ellas nos brinda amor incondicional y momentos de
          alegría. Al cuidar y entender a nuestros amigos peludos, fortalecemos
          un lazo especial que enriquece nuestras vidas.
        </p>
      </div>

      <div className="images-container--seccion4">
        <img src={image1} alt="Imagen 1" className="section-image" />
        <img src={image2} alt="Imagen 2" className="section-image" />
        <img src={image3} alt="Imagen 3" className="section-image" />
      </div>
    </section>
  );
};
