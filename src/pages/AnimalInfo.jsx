import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react"

const AnimalInfo = () => {
  const [animal, setAnimal] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    const animalInfo = async () => {
      const response = await axios.get(`http://localhost:3000/results/${id}`);
      setAnimal(response.data);
    };
    animalInfo();
  }, [id]);
  return (
    <div>
      <>
        <h2>Información sobre {animal.nombre}</h2>
        <p>Tipo: {animal.tipo}</p>
        <p>Raza: {animal.raza}</p>
        <p>Tamaño: {animal.tamaño}</p>
        <p>Cuidados Especiales: {animal.cuidadosEspeciales}</p>
        <p>Ubicación: {animal.ubicacion}</p>
        <p>Años: {animal.años}</p>
        <p>Gastos de Gestión: {animal.gastosDeGestion}</p>
        <img src={animal.imagen} alt={animal.nombre} />
      </>
    </div>
  )
}

export default AnimalInfo