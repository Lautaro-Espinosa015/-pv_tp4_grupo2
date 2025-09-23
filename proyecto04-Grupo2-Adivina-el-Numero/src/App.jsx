import React, { useState } from "react";
import InputSection from "./components/InputSection"; // Componente para input y botones
import Feedback from "./components/FeedBack"; // Componente para mensajes e intentos
import "./App.css";

function App() {
  // Genera un número aleatorio entre 1 y 100 al iniciar el juego
  const [numeroSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);

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

    // Validación: si no es un número válido
    if (isNaN(numero)) {
      setMensaje("Ingresa un número válido.");
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

  return (
    <div className="app-container">
      <h1>🎲 Adivina el número</h1>
      <p>Estoy pensando en un número entre 1 y 100</p>

      {/* Muestra el input y botones solo si el usuario no ganó ni se rindió */}
      {!ganaste && !rendido && (
        <InputSection
          intento={intento}
          setIntento={setIntento}
          verificar={verificar}
          rendirse={rendirse}
        />
      )}

      {/* Componente que muestra mensajes y, si corresponde, los intentos */}
      <Feedback mensaje={mensaje} ganaste={ganaste} intentos={intentos} />
    </div>
  );
}

export default App;