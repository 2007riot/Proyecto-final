import './casita.css';



const Casita = () =>
{
  return (
    <>
      <div className='contenedor-casita-card'>
        <div className='casita-card'>
          <div className='contenedor-x-card'>
          <img src='src/assets/images/x_card.svg' className='x-card'  alt='descartar-animal'/>
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
      </div>
    </>
  )
}

export default Casita