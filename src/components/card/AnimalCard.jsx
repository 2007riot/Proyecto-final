

const AnimalCard = ({ animal }) => {
    return (
        <div>
            <h2>{animal.nombre}</h2>
            <img src={animal.imagen} alt={animal.nombre} />
            <h3>{animal.raza}</h3>
        </div>
    )
}

export default AnimalCard