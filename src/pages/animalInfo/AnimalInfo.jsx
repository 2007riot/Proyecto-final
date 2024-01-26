import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react";
import "./animalInfo.css";

const AnimalInfo = () =>
{
  const [ animal, setAnimal ] = useState( [] );
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

  useEffect( () =>
  {
    const editarInfo = async () =>
    {
      const response = await axios.put( `http://localhost:3000/results/${id}`,
      {
          tipo: tipo,
          nombre: nombre,
          raza: raza,
          tamaño: tamaño,
          cuidadosEspeciales: cuidadosEspeciales,
          años: años,
          imagen: imagen
      }  );
      setAnimal( response.data );
    };
    animalInfo();
  }, [ id ] );



  const [ animalesCasita, setAnimalesCasita ] = useState( [] )
  
  const anadirAnimal = () =>
  {
    const listadoAnimales = [ ...animalesCasita, animal ];
    setAnimalesCasita( listadoAnimales );
  /*   // Asegúrate de que el animal no esté ya en la lista antes de agregarlo
    if ( !animalesCasita.some( ( a ) => a.id === animal.id ) )
    {
      setAnimalesCasita( [ ...animalesCasita, animal ] );
    } */
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
      <div className="contenedor--botones--editar">
        <button className="botones--editar">
          <img src="../src/assets/images/Edit.png" alt="editar" /></button>
        <button className="botones--editar">
          <img src="../src/assets/images/Delete.png" alt="borrar" /></button>
      </div>
    </div>
  );
};

export default AnimalInfo;
