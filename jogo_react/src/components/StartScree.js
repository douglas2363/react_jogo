import React from "react";
import "./StartScree.css";

const StartScree = ({ startGame }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button className="btn" onClick={startGame}>
        Começar o jogo
      </button>
    </div>
  );
};

export default StartScree;
