import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/nav/Navbar"
import Footer from "../components/footer/Footer"
import Header from '../components/header/Header'
import './layout.css'
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
