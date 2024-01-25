import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Adoptar from "../pages/Adoptar";
import AnimalInfo from "../pages/animalInfo/AnimalInfo";
import Casita from "../pages/casita/Casita";
import Donar from "../pages/Donar";
import SobreNosotras from "../pages/sobreNosotras/sobreNosotras";
import Contacto from "../pages/Contacto";





export const router = createBrowserRouter( [ {
    path: "/",
    element: <Layout />,
    children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/adoptar",
            element: <Adoptar />
        },
        {
            path: `/animal-info/:id`
            ,
            element: <AnimalInfo />
        },
        {
            path: "/casita",
            element: <Casita />
        },
        {
            path: "/donar",
            element: <Donar />
        },
        {
            path: "/sobreNosotras",
            element: <SobreNosotras />
        },
        {
            path: "/contacto",
            element: <Contacto />
        }
    ]
}
] )