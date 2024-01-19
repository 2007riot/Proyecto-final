import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/nav/Navbar"
import Footer from "../components/footer/Footer"

const Layout = () => {
    return (
        <>
            <Navbar />
            <main><Outlet /></main>
            <Footer />
        </>
    )
}

export default Layout

