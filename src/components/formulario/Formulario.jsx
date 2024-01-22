import "./formulario.css";
import React from 'react'

const Formulario = () => {
    return (
    <div className="formContainer">
    <form className="form">
            <p><b>Seleccione el tipo de animal: </b></p>
        <div className="form--tipo">
            <label>
                <input type="radio" id="perro" name="tipo" value="perro" />Perro
            </label>
            <label>
                <input type="radio" id="gato" name="tipo" value="gato" />Gato
            </label>
        </div>   
        <div className="form--inputs--container">
            <div className="form--inputs--divs">     
                <div>
                    <input type="text" placeholder='Nombre' />
                </div>
                <div>
                    <input type="text" placeholder='Raza' />
                </div>
                <div>
                    <select name="edad" id="edad">
                        <option hidden selected className="select--option">Edad</option>
                        <option value="cachorro" className="select--option">Cachorro</option>
                        <option value="adulto" className="select--option">Adulto</option>
                    </select>
                </div>
            </div>
            <div className="form--inputs--divs">
                <div>
                    <input type="text" placeholder='Provincia' />
                </div>
                <div>
                    <input type="text" placeholder='Enlace de la foto' />
                </div>
                <div>
                    <select name="tamaño" id="tamaño">
                        <option hidden selected className="select--option">Tamaño</option>
                        <option value="grande" className="select--option">Grande</option>
                        <option value="mediano" className="select--option">Mediano</option>
                        <option value="pequeño" className="select--option">Pequeño</option>
                    </select>
                </div>
            </div>
        </div>
    </form>
    </div>
    )
}

export default Formulario