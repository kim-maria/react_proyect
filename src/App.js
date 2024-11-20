import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import CampLogo from './imagenes/logo.jpeg';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);
  const manejarclic = () => {
    setNumClics(numClics + 1);
    // console.log('clic');
  };
  const reiniciarContador = () => {
    setNumClics(0);
    // console.log('reiniciar');
  };
  return (
    <div className='App'>
      <div className='IMG-LOGO'>
        <img 
        className='logo' 
        src={CampLogo} alt='logo inicial'/>
      </div>

      <div className='contenedor-principal'>
        <Contador numClics={numClics}></Contador>
        <Boton texto='clic' 
        esbotondeclic={true}
        manejarclic={manejarclic} />

        <Boton
        texto='reiniciar'
        esbotondeclic={false}
        manejarclic={reiniciarContador}/>

      </div>
      
    </div>
  );
}

export default App;
