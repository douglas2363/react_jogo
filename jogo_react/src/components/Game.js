import React from "react";

const Game = ({ endGame }) => {
  return (
    <div>
      <h1>GAME</h1>
      <button onClick={endGame}>Finalizar Jogo</button>
    </div>
  );
};

export default Game;
