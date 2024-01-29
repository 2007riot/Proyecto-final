import './casita.css';
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Casita = () => {

  const [casita, setCasita] = useState([]);

  useEffect(() => {
    const dataCasita = JSON.parse(localStorage.getItem('animalesCasita')) || [];
    setCasita(dataCasita);
  }, []);

  const eliminarAnimal = (animalId) => {
    const animalesAlmacenados = JSON.parse(localStorage.getItem('animalesCasita')) || [];
    const nuevosAnimales = animalesAlmacenados.filter(animal => animal.id !== animalId);
    localStorage.setItem('animalesCasita', JSON.stringify(nuevosAnimales));
    const dataCasita = JSON.parse(localStorage.getItem('animalesCasita')) || [];
    setCasita(dataCasita);
  };



  console.log(casita)

  return (
    <div>
      {casita.map((a) => (
        <div key={a.id}>
          <div className="animalInfoImg--container">
            <img
              src={a.imagen}
              alt={a.nombre}
              className="animalInfo--img"
            />
          </div>
          <h2>Información sobre {a.nombre}</h2>
          <p>Tipo: {a.tipo}</p>
          <p>Raza: {a.raza}</p>
          <p>Tamaño: {a.tamaño}</p>
          <p>Cuidados Especiales: {a.cuidadosEspeciales}</p>
          <p>Ubicación: {a.ubicacion}</p>
          <p>Años: {a.años}</p>
          <button onClick={e => eliminarAnimal(a.id)} className="botones--editar">
            <img src="../src/assets/images/Delete.png" alt="borrar" /></button>
        </div>
      ))}






      {/* <div className='contenedor-casita-card'>
        <div className='casita-card'>
          <div className='contenedor-x-card'>
            <img src='src/assets/images/x_card.svg' className='x-card' alt='descartar-animal' />
          </div>
          <img className='casita-imagen' alt='imagen_animal' src='https://images.pexels.com/photos/104115/pexels-photo-104115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <div className='casita-texto'>
            <h4>Ginger</h4>
            <h5>2 años, Barcelona</h5>
          </div>
        </div>
        <div className='casita-card'>
          <div className='contenedor-x-card'>
            <img src='src/assets/images/x_card.svg' className='x-card' alt='descartar-animal' />
          </div>
          <img className='casita-imagen' alt='imagen_animal' src='https://images.pexels.com/photos/104115/pexels-photo-104115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <div className='casita-texto'>
            <h4>Ginger</h4>
            <h5>2 años, Barcelona</h5>
          </div>
        </div>
        <div className='casita-card'>
          <div className='contenedor-x-card'>
            <img src='src/assets/images/x_card.svg' className='x-card' alt='descartar-animal' />
          </div>
          <img className='casita-imagen' alt='imagen_animal' src='https://images.pexels.com/photos/104115/pexels-photo-104115.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
          <div className='casita-texto'>
            <h4>Ginger</h4>
            <h5>2 años, Barcelona</h5>
          </div>
        </div>
        <button type='submit' className='casita-boton'>Reservar cita</button>
      </div> */}
    </div>
  )
}

export default Casita