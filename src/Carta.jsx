import React from 'react';

const Carta = ({ carta, manejarClickCarta }) => {
  return (
    <div
      className={`carta ${carta.volteada ? 'volteada' : ''} ${carta.emparejada ? 'emparejada' : ''}`}
      onClick={() => manejarClickCarta(carta.id)}
    >
      {carta.volteada || carta.emparejada ? carta.valor : '🔒'}
    </div>
  );
};

export default Carta;
