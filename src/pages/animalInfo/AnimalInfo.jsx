import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import "./animalInfo.css";
import { NavLink } from "react-router-dom";

const AnimalInfo = () =>
{
  const [ animal, setAnimal ] = useState( {} );
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect( () =>
  {
    const animalInfo = async () =>
    {
      const response = await axios.get( `http://localhost:3000/results/${id}` );
      setAnimal( response.data );
    };
    animalInfo();
  }, [ id ] );

  const eliminarAnimal = async ( id ) =>
  {
    const conf = window.confirm( '¿Quieres realmente borrar este animal?' )
    if ( conf )
    {
      await axios.delete( `http://localhost:3000/results/${id}` )
      alert( 'Este animal ha sido borrado correctamente' )
      navigate( '/adoptar' )
    }

  }

  const [ animalesCasita, setAnimalesCasita ] = useState( [] )

  const anadirAnimal = () =>
  {
    const listadoAnimales = [ ...animalesCasita, animal ];
    setAnimalesCasita( listadoAnimales );
  };


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
      <div className="contenedor--botones--editar">
        <NavLink to={`/editarInfo/${animal.id}`}>
          <button className="botones--editar">
            <img src="../src/assets/images/Edit.png" alt="editar" /></button>
        </NavLink>
        <button onClick={e => eliminarAnimal( animal.id )} className="botones--editar">
          <img src="../src/assets/images/Delete.png" alt="borrar" /></button>
      </div>
    </div>
  )
}

export default AnimalInfo;
