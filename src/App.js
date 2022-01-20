import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Tabla from './Components/Tabla';
import dataJsonCars from './data/cars.json'
import Hello from './sections/Hello';
import Texto from './sections/Props';
import Contador from './sections/StateComponent';
import Car from './sections/ImportJsonData';
import Box from './sections/Children';

function App() {
  const clases = [
    {
      esTitulo: true,
      NroClase: 'Nro. Clase',
      Descripcion: 'Descripción',
      Resultado: 'Resultado'
    },
    {
      NroClase: 'Primera Clase',
      Descripcion: 'Componente con state',
      Resultado: <Hello titulo='Otro titulo desde props' />
    },
    {
      NroClase: 'Segunda Clase',
      Descripcion: 'Ejemplos de props de distintos tipos',
      Resultado: <Texto
        // Pasar un Array[]
        arrayOfNumber={[2, 3, 10]}
        // Pasar un objeto {}
        objectoConInfo={{ key: 'First value', key2: 'otroValor' }}
        numero={2}
        // Pasar una función al componente
        multiplicar={(number) => number * 4}
        texto='texto en string'
        booleano
        titulo={<strong>Este es un titulo</strong>}
      />
    },
    {
      NroClase: 'Tercera clase',
      Descripcion: 'Componente anidado y uso de intervalo en componente padre',
      Resultado: <Contador />
    },
    {
      NroClase: 'Cuarta Clase',
      Descripcion: 'Uso de "key" en listados para identificar items como únicos',
      Resultado: <Car car={dataJsonCars} />
    },
    {
      NroClase: 'Quinta Clase',
      Descripcion: 'Componentes Children',
      Resultado: <div><Box>Hola mundo!</Box><Box>Adiós mundo Cruel...</Box></div>
    },
    {
      NroClase: 'Quinta Clase',
      Descripcion: 'Componentes Children',
      Resultado: <div></div>
    }
  ]
  return (
    <div className="App">
      <Tabla Data={clases} />
    </div>
  );
}

export default App;
