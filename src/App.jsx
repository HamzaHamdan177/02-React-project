import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../winning-combinations";

function deriveActivePlayer(gameTurns) {
  let correntPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") correntPlayer = "O";
  return correntPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  function handleActive(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const correntPlayer = deriveActivePlayer(prevTurns);

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
