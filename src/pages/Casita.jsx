import Formulario from "../components/formulario/Formulario";
import {animal} from '../components/card/AnimalCard'

const Casita = () => {
  return (
    <>
     {/*  <div className="contenedor">
        <img src={animal.image} />
        <h2>{animal.nombre}</h2>
        <p>{animal.edad}{animal.ubicacion}</p>
      </div> */}
      <Formulario />
    </>
  )
}

export default Casita