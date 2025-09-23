import React from "react";
import { useState } from "react";

function App() {
  // Genera número aleatorio entre 1 y 100 al montar el componente
  const [numeroSecreto] = useState(() => Math.floor(Math.random() * 100) + 1);

  // Guarda lo que escribe el usuario en el input (cadena)
  const [intento, setIntento] = useState("");

  // Mensaje de retroalimentación que se muestra al usuario (error, pista o acierto)
  const [mensaje, setMensaje] = useState("");

  // Contador de intentos realizados (se incrementa cada vez que el usuario presiona "Verificar")
  const [intentos, setIntentos] = useState(0);

  // Booleano que indica si el usuario ya acertó el número
  const [ganaste, setGanaste] = useState(false);

  // Función que verifica el intento del usuario
  const verificar = () => {
    // Convierte la cadena intento a número entero usando base 10
    const numero = parseInt(intento, 10);

    // Si la conversión no produce un número válido, muestra mensaje y sale
    if (isNaN(numero)) {
      setMensaje("Ingresa un número válido.");
      return;
    }

    // Incrementa el contador de intentos con la forma funcional para evitar condiciones de carrera
    setIntentos((prev) => prev + 1);

    // Comprueba rango 1-100 y avisa si está fuera (opcional pero útil)
    if (numero < 1 || numero > 100) {
      setMensaje("El número debe estar entre 1 y 100.");
      return;
    }

    // Compara el número ingresado con el número secreto y actualiza mensaje/estado
    if (numero === numeroSecreto) {
      setMensaje(`¡Acertaste! El número era ${numeroSecreto}.`);
      setGanaste(true);
    } else if (numero < numeroSecreto) {
      setMensaje("Demasiado bajo, intenta con un número más alto.");
    } else {
      setMensaje("Demasiado alto, intenta con un número más bajo.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>🎲 Adivina el número</h1>
      <p>Estoy pensando en un número entre 1 y 100</p>

      {/* Si no has ganado, muestra el input y el botón para intentar */}
      {!ganaste && (
        <div>
          <input
            type="number"
            // El input muestra el valor actual de intento (cadena)
            value={intento}
            // Al cambiar el input, actualiza intento con la cadena del input
            onChange={(e) => setIntento(e.target.value)}
            placeholder="Escribe tu número"
          />
          {/* Botón que llama a verificar al hacer click */}
          <button onClick={verificar}>Verificar</button>
        </div>
      )}

      {/* Muestra siempre el mensaje de retroalimentación */}
      <p>{mensaje}</p>

      {/* Al ganar, muestra cuántos intentos se realizaron */}
      {ganaste && <p>Intentos realizados: {intentos}</p>}
    </div>
  );
}

export default App;