import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layout/Layout";
import Adoptar from "../pages/Adoptar";
import AnimalInfo from "../pages/AnimalInfo";
import Casita from "../pages/Casita";
import Donar from "../pages/Donar";
import AboutUs from "../pages/aboutUs/AboutUs";




export const router = createBrowserRouter([{
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
            element: <AboutUs />
        }
    ]
}
])