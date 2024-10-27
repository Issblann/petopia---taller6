import React from 'react';
import {
  PiHandHeartFill,
  PiHandWavingFill,
  PiPawPrintFill,
  PiScrollFill,
} from 'react-icons/pi';
import Image1 from '../../assets/images/image1-seccion2.png';
import '../../styles/seccion-2-adopcion/styles.css';
export const SeccionAdopcion = () => {
  const adoptionInfo = [
    {
      title: 'Encuentra tu peludo',
      description:
        'Explora nuestra página web y encuentra la mascota perfecta que te roba el corazón.',
      icon: PiPawPrintFill,
    },
    {
      title: 'Contáctanos y conoce',
      description:
        'Contacta con el refugio para conocer a la mascota y ver si es una coincidencia.',
      icon: PiHandWavingFill,
    },
    {
      title: 'Completa el papeleo',
      description:
        'Completa la solicitud y el pago para finalizar la adopción.',
      icon: PiScrollFill,
    },
    {
      title: 'Llévalos a casa',
      description:
        'Trae a tu nuevo amigo peludo a casa y empieza a hacer recuerdos juntos!',
      icon: PiHandHeartFill,
    },
  ];
  return (
    <section className="section-adoption">
      <div className="section-adoption__information">
        <h1>Cómo adoptar a tu nuevo amigo</h1>
        <p>
          Listo para traer a casa a su nuevo mejor amigo? Explorar, conocer,
          adoptar y comenzar su viaje de amor y alegría hoy!
        </p>
        <div className="section-adoption__information--cards">
          {adoptionInfo.map((info, i) => (
            <div className="section-adoption__information--card" key={i}>
              <info.icon size={32} />
              <h3>{info.title}</h3>
              <p>{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      <figure className="section-adoption__image">
        <img src={Image1} alt="Image1" />
      </figure>
    </section>
  );
};
