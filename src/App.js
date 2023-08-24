import React from "react";
import "./App.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png";
import Boton from "../src/componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear"
import {useState} from 'react';
import {evaluate} from 'mathjs'
function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {

    if(input){
    const resultado = evaluate(input);
    const resultadoRedondeado = parseFloat(resultado.toFixed(3));
    setInput(resultadoRedondeado.toString());
  } else{
    alert('Ingresa Valores para realizar la Operación');
  }
  };
  

  return (
    <div className="App">
      <div className="freeCodeCamp-logo-contenedor">
        <img src={freeCodeCampLogo} className="freeCodeCamp-Logo" alt="freeCodeCamp Logo" />
      </div>

      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
       
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          <Boton manejarClic={agregarInput}>(</Boton>
        <Boton manejarClic={agregarInput}>)</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;