
/*Imports de componentes*/
import React from "react";    
import Saludo from './assets/components/saludo';
import Colores from './assets/components/colores';
import Juego from './assets/components/juego';
import "./App.css";
/**/
function App() {
  /*Texto Escrito en el saludo editable*/
let saludo = "Hola Profesores somos el Grupo 2" ; 
  let compartimos = "Compartimos nuestros 3 trabajos";
  let primero = "  Saludo 1 ";
  let segundo = " Adivina el número 2";
  let tercero = "  Colores 3 ";
  /**/
  return (
    <div className="app-container">
      <Saludo saludo={saludo} compartimos={compartimos} primero={primero} segundo={segundo} tercero={tercero} />
      <Colores />
      <hr />
      <Juego />
    </div>
  );
}

export default App;