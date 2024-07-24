import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
function App() {
  const [activePlayer, setActive] = useState("X");
  const [gameTurns, setGameTurns] = useState([]);
  function handleActive(rowIndex, colIndex) {
    setActive((curActivePlayer) => (curActivePlayer == "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let correntPlayer = "X";
      if (prevTurns.length > 0 && prevTurns[0].player === "X")
        correntPlayer = "O";

      // saying player : activePlayer is wrong because we need to avoid two states in each other
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: correntPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="first player" symbol="X" active={activePlayer} />
          <Player
            initialName="second player"
            symbol="O"
            active={activePlayer}
          />
        </ol>
        <GameBoard turns={gameTurns} handleActive={handleActive} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
