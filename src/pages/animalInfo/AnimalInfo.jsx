import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import "./animalInfo.css";
import { NavLink } from "react-router-dom";

const AnimalInfo = () =>
{
  const [ animal, setAnimal ] = useState( {} );
  const { id } = useParams();
  useEffect( () =>
  {
    const animalInfo = async () =>
    {
      const response = await axios.get( `http://localhost:3000/results/${id}` );
      setAnimal( response.data );
    };
    animalInfo();
  }, [ id ] );



  const [ animalesCasita, setAnimalesCasita ] = useState( [] )

  const anadirAnimal = () =>
  {
    const listadoAnimales = [ ...animalesCasita, animal ];
    setAnimalesCasita( listadoAnimales );
  };
  console.log( animalesCasita )

  return (
    <div className="animalInfocontainer">
      <div className="animalInfoImg--container">
        <img
          src={animal.imagen}
          alt={animal.nombre}
          className="animalInfo--img"
        />
      </div>
      <div className="animalInfoTxt--container">
        <h2>Información sobre {animal.nombre}</h2>
        <p>Tipo: {animal.tipo}</p>
        <p>Raza: {animal.raza}</p>
        <p>Tamaño: {animal.tamaño}</p>
        <p>Cuidados Especiales: {animal.cuidadosEspeciales}</p>
        <p>Ubicación: {animal.ubicacion}</p>
        <p>Años: {animal.años}</p>
        <p>Gastos de Gestión: {animal.gastosDeGestion}</p>
        <div className="container--button">
          <button onClick={anadirAnimal} className="button-adopta btn--conoceme">
            <img src="../src/assets/images/iconoConoceme.png" alt="iconoConoceme" className="iconoConoceme" />
            Conóceme</button>
        </div>
      </div>
      <NavLink to={`/editarInfo/${animal.id}`}>
        <div className="contenedor--botones--editar">
          <button className="botones--editar">
            <img src="../src/assets/images/Edit.png" alt="editar" /></button>
          <button className="botones--editar">
            <img src="../src/assets/images/Delete.png" alt="borrar" /></button>
        </div>
      </NavLink>
    </div>
  );
};

export default AnimalInfo;
