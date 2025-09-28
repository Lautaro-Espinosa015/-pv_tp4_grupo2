/*Imports de componentes*/
import React, { useState } from "react";
import InputSection from "./InputSection"; // Componente para input y botones
import Feedback from "./FeedBack"; // Componente para mensajes e intentos
import "./juego.css";

function Juego() {
  /* que es UseState y porque es importante: Es una función que te permite crear y manejar estados dentro de un componente funcional. 
  Un “estado” es simplemente un valor que puede cambiar con el tiempo (como un contador, un texto, un booleano, etc.).
 */
  // Genera un número aleatorio entre 1 y 100 al iniciar el juego
  const [numeroSecreto, setNumeroSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);

  // Estado para guardar lo que escribe el usuario en el input
  const [intento, setIntento] = useState("");

  // Estado para mostrar mensajes de retroalimentación (acierto, error, pista, rendición)
  const [mensaje, setMensaje] = useState("");

  // Contador de intentos realizados
  const [intentos, setIntentos] = useState(0);

  // Estado booleano: true si el usuario adivinó el número
  const [ganaste, setGanaste] = useState(false);

  // Estado booleano: true si el usuario se rinde
  const [rendido, setRendido] = useState(false);

  // Función que verifica el número ingresado por el usuario
  const verificar = () => {
    const numero = parseInt(intento, 10); // Convierte el input a número entero

    if (isNaN(numero)) {
      setMensaje("Ingresa un número válido."); // Fija mensaje de error
      return;
    }

    // Incrementa el contador de intentos
    setIntentos((prev) => prev + 1);

    // Validación: rango permitido 1-100
    if (numero < 1 || numero > 100) {
      setMensaje("El número debe estar entre 1 y 100.");
      return;
    }

    // Comparación con el número secreto
    if (numero === numeroSecreto) {
      setMensaje(`¡Acertaste! El número era ${numeroSecreto}.`);
      setGanaste(true); // Marca que el juego terminó con éxito
    } else if (numero < numeroSecreto) {
      setMensaje("Demasiado bajo, intenta con un número más alto.");
    } else {
      setMensaje("Demasiado alto, intenta con un número más bajo.");
    }
  };

  // Función que se ejecuta si el usuario se rinde
  const rendirse = () => {
    setMensaje(`Te rendiste. El número era ${numeroSecreto}.`);
    setRendido(true); // Marca que el juego terminó por rendición
  };

  // Función para reiniciar el juego a su estado inicial
  const reiniciarJuego = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setIntento("");
    setMensaje("");
    setIntentos(0);
    setGanaste(false);
    setRendido(false);
  };

  return (
    /* seccion juego de html */
    <div className="juego-container">
      <h1>🎲 Adivina el número</h1>
      <p>Estoy pensando en un número entre 1 y 100</p>

      {!ganaste && !rendido && (
        <InputSection
          intento={intento}
          setIntento={setIntento}
          verificar={verificar}
          rendirse={rendirse}
        />
      )}

      <Feedback mensaje={mensaje} ganaste={ganaste} intentos={intentos} />

      {(ganaste || rendido) && (
        <button onClick={reiniciarJuego} className="btn primary-btn" style={{marginTop: '20px'}}>
          Reiniciar Juego
        </button>
      )}
    </div>
  );
}

export default Juego;