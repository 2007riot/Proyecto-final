import { useState } from "react"
import "./Filter.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faTrash } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ onClick }) => {
    const [isAnimalListOpen, setAnimalListOpen] = useState(false)
    const [isTamanoListOpen, setTamanoListOpen] = useState(false)
    const [isEdadListOpen, setEdadListOpen] = useState(false)

    const toggleAnimal = () => {
        setAnimalListOpen(!isAnimalListOpen)
        setTamanoListOpen(false)
        setEdadListOpen(false)
    }

    const toggleTamano = () => {
        setTamanoListOpen(!isTamanoListOpen)
        setAnimalListOpen(false)
        setEdadListOpen(false)
    }
    const toggleEdad = () => {
        setEdadListOpen(!isEdadListOpen)
        setAnimalListOpen(false)
        setTamanoListOpen(false)
    };

    return (
        <div className="filter">
            <button className="filterField filterFieldRadiusLeft" onClick={toggleAnimal}>
                Animales  <FontAwesomeIcon icon={faCaretDown} />
                {isAnimalListOpen ? (
                    <ul className="filter-ul">
                        <li className="filter-li" onClick={() => onClick("tipo", "perro")}>Perros</li>
                        <li className="filter-li" onClick={() => onClick("tipo", "gato")}>Gatos</li>
                    </ul>
                ) : null}
            </button>
            <button className="filterField" onClick={toggleTamano}>Tamaño  <FontAwesomeIcon icon={faCaretDown} />
                {isTamanoListOpen ? (
                    <ul className="filter-ul">
                        <li className="filter-li" onClick={() => onClick("tamano", "Pequeño")}>Pequeño</li>
                        <li className="filter-li" onClick={() => onClick("tamano", "Mediano")}>Mediano</li>
                        <li className="filter-li" onClick={() => onClick("tamano", "Grande")}>Grande</li>
                    </ul>
                ) : null}
            </button>
            <button className="filterField" onClick={toggleEdad}>
                Edad  <FontAwesomeIcon icon={faCaretDown} />
                {isEdadListOpen ? (
                    <ul className="filter-ul">
                        <li className="filter-li" onClick={() => onClick("edad", "Cachorrito")}>Cachorrito</li>
                        <li className="filter-li" onClick={() => onClick("edad", "Adulto")}>Adulto</li>
                    </ul>
                ) : null}
            </button>
            <button className="filterField filterFieldRadiusRight" onClick={() => onClick("")}>
                Borrar filtros <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    )
}

export default Filter;
