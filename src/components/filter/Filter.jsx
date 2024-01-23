import { useState } from "react"
import "./Filter.css"

const Filter = ({ onClick }) => {
    const [isAnimalListOpen, setAnimalListOpen] = useState(false)
    const [isTamanoListOpen, setTamanoListOpen] = useState(false)
    const [isProvinciaListOpen, setProvinciaListOpen] = useState(false)
    const [isEdadListOpen, setEdadListOpen] = useState(false)

    const toggleAnimal = () => {
        setAnimalListOpen(!isAnimalListOpen)
        setTamanoListOpen(false)
        setProvinciaListOpen(false)
        setEdadListOpen(false)
    }

    const toggleTamano = () => {
        setTamanoListOpen(!isTamanoListOpen)
        setAnimalListOpen(false)
        setProvinciaListOpen(false)
        setEdadListOpen(false)
    }
    const toggleProvincia = () => {
        setProvinciaListOpen(!isProvinciaListOpen)
        setAnimalListOpen(false)
        setTamanoListOpen(false)
        setEdadListOpen(false)
    };

    const toggleEdad = () => {
        setEdadListOpen(!isEdadListOpen)
        setAnimalListOpen(false)
        setTamanoListOpen(false)
        setProvinciaListOpen(false)
    };

    return (
        <div className="filter">
            {/* Animal filter */}
            <button className="filterField filterFieldRadiusLeft" onClick={toggleAnimal}>
                Animales <span>▼</span>
                {isAnimalListOpen ? (
                    <ul>
                        <li onClick={() => onClick("tipo", "perro")}>Perros</li>
                        <li onClick={() => onClick("tipo", "gato")}>Gatos</li>
                    </ul>
                ) : null}
            </button>

            {/* Tamaño filter */}
            <button className="filterField" onClick={toggleTamano}>Tamaño <span>▼</span>
                {isTamanoListOpen ? (
                    <ul>
                        <li onClick={() => onClick("tamano", "Pequeño")}>Pequeño</li>
                        <li onClick={() => onClick("tamano", "Mediano")}>Mediano</li>
                        <li onClick={() => onClick("tamano", "Grande")}>Grande</li>
                    </ul>
                ) : null}
            </button>

            {/* Provincia filter */}
            <button className="filterField" onClick={toggleProvincia}>
                Provincia <span>▼</span>
                {isProvinciaListOpen ? (
                    <ul>
                        <li onClick={() => onClick("ubicacion", "Barcelona")}>Barcelona</li>
                    </ul>
                ) : null}
            </button>

            <button className="filterField filterFieldRadiusRight" onClick={toggleEdad}>
                Edad <span>▼</span>
                {isEdadListOpen ? (
                    <ul>
                        <li onClick={() => onClick("edad", "Cachorrito")}>Cachorrito</li>
                        <li onClick={() => onClick("edad", "Adulto")}>Adulto</li>
                    </ul>
                ) : null}
            </button>
        </div>
    )
}

export default Filter;
