import React from "react";

const GameOver = ({ retry }) => {
  return (
    <div>
      <h1>GAME OVER</h1>
      <button onClick={retry}>Tentar Novamente</button>
    </div>
  );
};

export default GameOver;
