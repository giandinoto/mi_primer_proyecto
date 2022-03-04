import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';

const App = () => {

  const persona = {
    nombre: "Juan",
    edad: "30"
  }

  return(
    <>
      <Header/>
      {/*<Main nombre="Alejandro" edad={42}/>*} 
      {/*parseo como numero con las llaves
      <Main persona={persona}/>
      */}

      <Main nombre="Alejandro" edad={42}/>
      <Footer />
    </>
  )

}

export default App; 