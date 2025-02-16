import React, { useState, useEffect } from 'react';
import Tablero from './Tablero';

import './App.css'; // Importa el archivo CSS


const App = () => {
  // El hook useState se utiliza para agregar estado a componentes funcionales.
  // En este caso, se utilizan para almacenar las cartas del juego, las cartas volteadas, las parejas encontradas, y el estado de juego.
  const [cartas, setCartas] = useState([]);
  const [cartasVolteadas, setCartasVolteadas] = useState([]);
  const [parejasEncontradas, setParejasEncontradas] = useState(0);
  const [jugando, setJugando] = useState(true);


  // El hook useEffect se utiliza para ejecutar efectos secundarios en componentes funcionales.
  // En este caso, se utiliza para generar las cartas iniciales del juego de memoria.
  useEffect(() => {
    const cartasIniciales = generarCartas();
    setCartas(cartasIniciales);
  }, []);

  /**
   * Genera un conjunto de cartas para un juego de memoria.
   * Las cartas se generan a partir de un conjunto de valores duplicados y mezclados aleatoriamente.
   * Cada carta tiene un id único, un valor, y propiedades para indicar si está volteada o emparejada.
   *
   * @returns {Array<Object>} Un arreglo de objetos, donde cada objeto representa una carta con las siguientes propiedades:
   * - id {number}: Identificador único de la carta.
   * - valor {string}: Valor de la carta.
   * - volteada {boolean}: Indica si la carta está volteada.
   * - emparejada {boolean}: Indica si la carta ha sido emparejada.
   */
  const generarCartas = () => {
    const valores = ['A', 'B', 'C', 'D', 'E', 'F'];
    let cartas = [...valores, ...valores];
    cartas = cartas.sort(() => Math.random() - 0.5); // Mezclar las cartas
    return cartas.map((valor, index) => ({
      id: index,
      valor,
      volteada: false,
      emparejada: false,
    }));
  };

  const manejarClickCarta = (id) => {
    if (!jugando) return; // Si no se está jugando, no hacer nada

    const nuevasCartas = [...cartas];
    const carta = nuevasCartas.find((carta) => carta.id === id); // Encontrar la carta que se ha clickeado

    if (carta.volteada || carta.emparejada) return; // Si ya está volteada o emparejada, no hacer nada

    carta.volteada = true;
    setCartas(nuevasCartas); // Actualizar el estado de las cartas en el tablero

    const nuevasCartasVolteadas = [...cartasVolteadas, carta]; // Agregar la carta a las cartas volteadas

    // Si se han volteado dos cartas, verificar si son iguales
    if (nuevasCartasVolteadas.length === 2) {
      // Si las cartas son iguales, son marcadas como emparejadas
      if (nuevasCartasVolteadas[0].valor === nuevasCartasVolteadas[1].valor) {
        setParejasEncontradas(parejasEncontradas + 1);
        nuevasCartasVolteadas.forEach((carta) => {
          carta.emparejada = true;
        });
      } else { // Si las cartas no son iguales, esperar un segundo y voltearlas de nuevo
        setTimeout(() => {
          nuevasCartasVolteadas.forEach((carta) => (carta.volteada = false));
          setCartas([...nuevasCartas]);
        }, 1000);
      }
      setCartasVolteadas([]); // Limpiar las cartas volteadas
    } else { // Si solo se ha volteado una carta, actualizar el estado de las cartas volteadas
      setCartasVolteadas(nuevasCartasVolteadas);
    }

    if (parejasEncontradas === valores.length) {
      setJugando(false);
      alert('¡Ganaste!');
    }
  };

  /**
   * Restablece el estado del juego a su configuración inicial.
   * 
   * Esta función genera un nuevo conjunto de cartas, restablece el arreglo de cartas volteadas,
   * restablece el conteo de parejas encontradas y establece el estado del juego a jugando.
   */
  const reiniciarJuego = () => {
    const cartasIniciales = generarCartas();
    setCartas(cartasIniciales);
    setCartasVolteadas([]);
    setParejasEncontradas(0);
    setJugando(true);
  };

  return (
    <div className="app">
      <h1>Juego de Memoria</h1>
      <Tablero cartas={cartas} manejarClickCarta={manejarClickCarta} />
      <button onClick={reiniciarJuego}>Reiniciar Juego</button>
    </div>
  );
};

export default App;
