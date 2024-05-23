//css
import "./App.css";
//React
import { useCallback, useEffect, useState } from "react";
//data
import { worlist } from "./data/word";
//compoenents
import StartScree from "./components/StartScree";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {
    id: 1,
    name: "Start",
  },
  {
    id: 2,
    name: "Game",
  },
  {
    id: 3,
    name: "End",
  },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(worlist);

  console.log(words);

  return (
    <div className="App">
      {gameStage === "Start" && <StartScree />}
      {gameStage === "Game" && <Game />}
      {gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
