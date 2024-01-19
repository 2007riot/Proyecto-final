import { NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../logo/Logo";



const Navbar = () =>
{
  return (
   /*  <>
    <div className="contenedor">
      <nav className="navbar">
        <div  className='nav-container'>
          <NavLink  className='navlink' to='/SobreNosotras'>Sobre Nosotras</NavLink>
          <NavLink  className='navlink' to='/Adoptar'>Adoptar</NavLink>
          <NavLink className='navlink' to='/Donar'>Donar</NavLink>
        </div>
        <div className='nav-container'>
          <NavLink to='/'><Logo /></NavLink>
        </div>
        <div className='nav-container'>
          <img className="casita" alt="casita" src="src\assets\images\casitaIcon.png" />
      </div >
      </nav>
    </div >    
    </> */
    <div className="contenedor">
      <nav className="navbar">
          <NavLink className='navlink' to='/SobreNosotras'>Sobre Nosotras</NavLink>
          <NavLink className='navlink' to='/Adoptar'>Adoptar</NavLink>
          <NavLink className='navlink' to='/Donar'>Donar</NavLink>
          <NavLink to='/'><Logo /></NavLink>
          <img className="casita" alt="casita" src="src\assets\images\casitaIcon.png" />
      </nav>
    </div >    
  )
}

export default Navbar