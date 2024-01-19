import "./animalCard.css";

const AnimalCard = ({ animal }) => {
  return (
    <div className="card">
      <img src={animal.imagen} alt={animal.nombre} className="card--imagen" />
      <div className="card--componentes">
        <div>
          <h2 className="card--componentes--nombre">{animal.nombre}</h2>
          <p className="card--componentes--descripcion">
            Edad: {animal.años}, {animal.raza}, {animal.ubicacion}.
          </p>
        </div>
        <div>
          <button className="card--componentes--button">
            <img
              src="src/assets/iconoInfo.png"
              alt="iconInfo"
              className="card--componentes--icono"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;
