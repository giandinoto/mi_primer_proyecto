import React from 'react'

export const Main = ( { nombre , edad }  ) => {


   // En react los paremetros se llaman "props" 
   /*   console.log(props) 
        console.log(props.nombre) 
         console.log(props.edad)*/
   //console.log(props.persona.nombre)


  return (
    <main>
        <h2>Bienvenido {nombre}!</h2>
        <p>Tu edad es {edad}</p>
    </main>
  )
}

export default Main