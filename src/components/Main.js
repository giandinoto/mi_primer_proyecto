import React from 'react'
import {useState}  from "react"

export const Main = ( { nombre , edad }  ) => {

  /*const estado = useState();
  console.log(estado)*/

  const valorInicial = 3

  const [estado, setEstado] = useState(valorInicial)

  const handleSumar = () => {
    //console.log("click 2")
    setEstado(estado + 1)
  }

  const handleRestar = () => {
    //console.log("click 2")
    if(estado>0){
      setEstado(estado - 1)
    }
  }

  const handleResetear = () => {
    //console.log("click 2")
    setEstado(0)
  }

   // En react los paremetros se llaman "props" 
   /*   console.log(props) 
        console.log(props.nombre) 
         console.log(props.edad)*/
   //console.log(props.persona.nombre)


  return (
    <main>
        <h2>Bienvenido {nombre}!</h2>
        <p>Tu edad es {edad}</p>
        <p> Mi contador va: {estado}</p>
        <button onClick={handleSumar}>Sumar</button>
        <button onClick={handleRestar}>Restar</button>
        <button onClick={handleResetear}>Reset</button>
    </main>
  )
}

export default Main