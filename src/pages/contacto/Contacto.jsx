import React, { useState } from "react";
import "./contacto.css";

const Contacto = () => {
   // Estado para controlar la visibilidad de la notificación
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);
  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Cambia el estado para mostrar la notificación
    setMostrarNotificacion(true);
  };
    return (
      <div className="formContainer">
        <form className="form" onSubmit={handleSubmit}>
        <h1>Formulario de Contacto</h1>
            <p><b>Rellene los siguientes campos: </b></p>  
                <div className="form--inputs--divs">
                    <input type="text" placeholder='Nombre completo*' />
                </div>
                <div className="form--inputs--divs">
                    <input type="text" placeholder='Correo electrónico*' />
                </div>
                <div className="form--inputs--divs">
                    <input type="text" placeholder='Número de contacto*' />
                </div>
                <button className="button-adopta btn--conoceme" type="submit">Enviar</button>
        </form>
        <div className={`ocultarNotificacion ${mostrarNotificacion ? "mostrarNotificacion" : ""}`}>
        <article>¡Gracias!¡Nos pondremos en contacto muy pronto!</article>
      </div>
      </div>
    )
  }
  
  export default Contacto