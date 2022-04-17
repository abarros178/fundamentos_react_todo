import React from 'react'

const Peticiones = () => {
  const [personajes,setPersonajes]=React.useState([])
  const ObtenerPersonajes = async () => {
  try {
    const res = await fetch("https://rickandmortyapi.com/api/character");
    const data = await res.json();
    const results = await data.results;
    setPersonajes(results)
  } catch (error) {
    console.log(error);
  }
};

  return (
    <>
    <h1>PETICION DE API RICK AND MORTY</h1>
    <button onClick={ObtenerPersonajes}>Traer personajes </button>
    
    
    
    </>

  )
}

export default Peticiones