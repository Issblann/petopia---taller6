import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import Image1 from '../../assets/images/imagen1-seccion3.png';
import Image2 from '../../assets/images/imagen2-seccion3.png';
import '../../styles/seccion-3-participar/styles.css';
export const SeccionParticipar = () => {
  const numbersData = [
    {
      number: '200+',
      text: 'Refugios',
    },
    {
      number: '2.5K',
      text: 'Voluntarios',
    },
    {
      number: '5.8K',
      text: 'Adopciones',
    },
    {
      number: '25K',
      text: 'Horas',
    },
  ];
  return (
    <section id="participar" className="section-participar">
      <div className="container-information">
        <div className="paragraph-button">
          <p className="community-paragraph">
            En Petopia, nos dedicamos a rescatar y reubicar mascotas
            necesitadas, asegurándonos de que encuentren el amor que merecen.
            Con compasión y comunidad en nuestro corazón, aspiramos a emparejar
            cada mascota con su familia perfecta.
          </p>
          <button className="button-community">
            Únete a nuestra comunidad
            <MdArrowOutward size={20} />
          </button>
        </div>
        <aside className="numbers-information">
          {numbersData.map((data, index) => (
            <div className="number-container" key={index}>
              <h2 className="number">{data.number}</h2>
              <span className="text-information">{data.text}</span>
            </div>
          ))}
        </aside>
      </div>
      <figure className="images-container--participar">
        <img src={Image1} alt="image1" />
        <img src={Image2} alt="image2" />
      </figure>
    </section>
  );
};
