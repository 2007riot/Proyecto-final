import "./animalCard.css";

const AnimalCard = ({ animal }) => {
    return (
        <div className='flex-card'>
            <div className='card'>
            <img src={animal.imagen} alt={animal.nombre} className='imagen-card' />
                <div>
                    <h2 className='nombre-animal'>{animal.nombre}</h2>
                    <p className='descripcion'>Edad: {animal.años}, {animal.raza}, {animal.ubicacion}.</p>
                </div>
                <div>
                    <p>icono</p>
                </div>
            </div>
        </div>
    )
}

export default AnimalCard