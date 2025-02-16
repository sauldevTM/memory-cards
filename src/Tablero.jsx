import React from 'react';
import Carta from './Carta';

const Tablero = ({ cartas, manejarClickCarta }) => {
  return (
    <div className="tablero">
      {cartas.map((carta) => (
        <Carta
          key={carta.id}
          carta={carta}
          manejarClickCarta={manejarClickCarta}
        />
      ))}
    </div>
  );
};

export default Tablero;
