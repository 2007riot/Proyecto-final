import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../logo";



const Navbar = () =>
{
  return (
    <nav className="navbar">
      <NavLink  className='navlink' to='/SobreNosotras'>Sobre Nosotras</NavLink>
      <NavLink  className='navlink' to='/Adoptar'>Adoptar</NavLink>
      <NavLink  className='navlink' to='/Donar'>Donar</NavLink>
      <Logo />
      <img src="src\assets\images\casitaIcon.png"/>
    </nav>
  )
}

export default Navbar