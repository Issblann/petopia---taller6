import React from 'react';
import '../../styles/seccion-1-descubre/styles.css';
import { MdArrowOutward } from 'react-icons/md';
import Image1 from '../../assets/images/image1-seccion1.png';
import Image2 from '../../assets/images/image2-seccion1.png';
import Image3 from '../../assets/images/image3-seccion1.png';
import Image4 from '../../assets/images/image4-seccion1.png';

export const Seccion1Descubre = () => {
  const IMAGES = [
    {
      id: 1,
      src: Image1,
      alt: 'imagen 1',
    },
    {
      id: 2,
      src: Image2,
      alt: 'imagen 1',
    },
    {
      id: 3,
      src: Image3,
      alt: 'imagen 1',
    },
    {
      id: 4,
      src: Image4,
      alt: 'imagen 1',
    },
  ];
  return (
    <section id="/" className="seccion-descubre">
      <figure className="seccion-descubre__images">
        {IMAGES.map((image) => (
          <div className="seccion-descubre__image-container" key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </figure>
      <div className="seccion-descubre__information">
        <h1>¡Descubre qué amigo peludo te queda mejor!</h1>
        <p>
          Da un paseo por nuestra familia peluda y descubre el compañero ideal
          que se adapta perfectamente a tu estilo de vida y personalidad. Ya sea
          que esté buscando un amigo juguetón para aventuras al aire libre o un
          compañero tierno para noches acogedoras, nuestra diversa selección de
          mascotas espera su descubrimiento.
        </p>
        <button className="button-community button-descubre">
          Explora mas <MdArrowOutward size={20} />
        </button>
      </div>
    </section>
  );
};
