import './App.css';
import React, {useState} from 'react';
import Pestanas from './Componentes/Pestanas';
import Contenido from './Componentes/Contenido';
import './Componentes/Pestanas.css';

const App=()=> {
  const pestas = ["Pestaña 1","Pestaña 2","Pestaña 3"];
  const cont = ["Tab 1 content is showing here","Tab 2 content is showing here","Tab 3 content is showing here"];
  const [celd,setCeld] = useState('');
  const elegir=(celd)=>{
    setCeld(celd);
    console.log(celd);
  }
  return (
    <div className="App">
      <Pestanas array={pestas} func={elegir}/>
      <Contenido desc={cont} array={pestas} celda={celd}/>
    </div>
  );
}

export default App;
