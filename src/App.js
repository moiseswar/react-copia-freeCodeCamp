import './App.css';
import freeCodeCampLogo from './imgenes/fcc_primary.svg'
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react';
function App() {

  const [numClicks, setNumClick] = useState(0);


  const manejarClick = () => {
    setNumClick(numClicks + 1);
  };

  const reiniciarcontador = () => {
    setNumClick(0)
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de frecodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClicks={numClicks}
        />
        <Boton
        texto='Click'
        bClick={true}
        manejarClick={manejarClick}
        />
        <Boton
        texto='Reiniciar'
        bClick= {false}
        manejarClick={reiniciarcontador}
        />
      </div>
    </div>
  );
}

export default App;
