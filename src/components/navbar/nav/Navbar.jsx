import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../logo/Logo";



const Navbar = () =>
{
  return (
    <div className="contenedor">
    <nav className="navbar">
      <NavLink  className='navlink' to='/SobreNosotras'>Sobre Nosotras</NavLink>
      <NavLink  className='navlink' to='/Adoptar'>Adoptar</NavLink>
      <NavLink  className='navlink' to='/Donar'>Donar</NavLink>
      <Logo />
      <img className="casita" alt="casita" src="src\assets\images\casitaIcon.png"/>
      </nav>
    </div>
  )
}

export default Navbar