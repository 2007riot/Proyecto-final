import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/nav/Navbar"
import Footer from "../components/footer/Footer"
<<<<<<< HEAD
import Header from '../components/header/Header'
import './layout.css'
=======
import "./layout.css";

>>>>>>> 2cece0e65949f4280bd1cadbc31341e783213c6f

const Layout = () => {
    return (
        <>
            <Navbar />
            <Header/>
            <main><Outlet /></main>
            <Footer />
        </>
    )
}

export default Layout

