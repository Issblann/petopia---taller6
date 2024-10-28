import React from 'react';
import { AiTwotoneMail } from 'react-icons/ai';
import Image1 from '../../assets/images/imagen1-seccion5.png';

import '../../styles/seccion-5-newsletter/styles.css';

export const NewsLetterSection = () => {
  return (
    <section id="noticias" className="section-newsletter">
      <figure className="container-image">
        <img src={Image1} alt="imagen-1-seccion5" />
      </figure>
      <div className="container-newsletter__information">
        <h2>
          ¡Suscríbase a nuestro boletín de noticias para actualizaciones de
          mascotas!
        </h2>
        <p>
          Mantente al tanto de las últimas actualizaciones! Suscríbete a nuestro
          boletín para recibir noticias, anuncios de eventos y historias
          conmovedoras directamente en tu bandeja de entrada.
        </p>
        <form className="newsletter-form">
          <fieldset className="input-container">
            <AiTwotoneMail />
            <input type="email" placeholder="Escribe tu correo..." />
          </fieldset>

          <button type="submit">Suscribirme</button>
        </form>
      </div>
    </section>
  );
};
