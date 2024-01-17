import { useEffect } from "react";
import { useState } from "react"
import AnimalCard from "../components/card/AnimalCard";
import axios from "axios";


const Adoptar = () => {
  const [animales, setAnimales] = useState([]);
  useEffect(() => {
    const data = async () => {
      const response = await axios.get("http://localhost:3000/results"
      );
      const info = await response.data;
      setAnimales(info);
      console.log(info)
    }

    data()
  }, [])

  return (
    <>
      {animales.map((animal) => {
        return <AnimalCard key={animal.id} animal={animal} />
      })}
    </>
  )
}

export default Adoptar