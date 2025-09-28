import React from 'react';
import './saludo.css';
function Saludo({ saludo, compartimos, primero, segundo, tercero }) {
  return (
    <div className="saludo-container">
    
      <h1>{saludo}</h1>
      <h2>{compartimos}</h2>
      <h3>{primero}</h3>
      <h4>{segundo}</h4>
      <h5>{tercero}</h5>
    </div>
  );
}

export default Saludo;
