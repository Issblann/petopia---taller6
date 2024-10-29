import '/src/styles/hero/hero.css'; // Importamos el archivo CSS para los estilos
import Dog from '../../assets/vectors/perro.svg'; // Imagen de perrito (icono del botón)
import Cat from '../../assets/vectors/gato.svg'; // Imagen de gatito (icono del botón)
import Vector from '../../assets/vectors/figure.svg'; // Vector para el fondo, si lo necesitas
import Pets from '../../assets/images/image_hero1.png'; // Imagen de mascotas para la derecha

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-column left-column">
        <h1 className="hero-title">
          Abraza el amor con tu nuevo mejor amigo peludo.
        </h1>
        <p className="hero-text">
          Adopta ahora y comienza a crear recuerdos inolvidables juntos.
        </p>

        <div className="hero-buttons">
          <p>¡Encuentra tu match!</p>
          <div className="hero-btn-container">
            <button className="hero-btn">
              <img src={Cat} alt="Buscar Gatitos" className="icon" />
            </button>
            <button className="hero-btn">
              <img src={Dog} alt="Buscar Perritos" className="icon" />
            </button>
          </div>
        </div>
      </div>

      <div className="hero-column right-column">
        <img src={Pets} alt="Mascotas" className="mascotas-img" />

        <img src={Vector} alt="..." className="vector-bg" />
      </div>
    </section>
  );
};

export default Hero;
