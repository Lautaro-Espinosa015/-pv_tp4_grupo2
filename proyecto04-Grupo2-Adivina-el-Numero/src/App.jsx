
import React from "react";    
import Saludo from './assets/components/saludo';
import Colores from './assets/components/colores';
import Juego from './assets/components/juego';
import "./App.css";

function App() {


  return (
    <div className="app-container">
      <Saludo />
      <Colores />
      <hr />
      <Juego />
    </div>
  );
}

export default App;