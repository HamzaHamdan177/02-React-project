import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "../winning-combinations";
import GameOver from "./components/GameOver";
export const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
function deriveActivePlayer(gameTurns) {
  let correntPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") correntPlayer = "O";
  return correntPlayer;
}

export function App() {
  const [name, setName] = useState({ X: "FIRST PLAYER", O: "SECOND PLAYER" });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((array) => [...array])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = "";
  if (gameTurns.length == 9) winner = gameTurns.length;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol =
      gameBoard[combination[1].row][combination[1].column];
    const ThirdSquareSymbol =
      gameBoard[combination[2].row][combination[2].column];
    if (
      firstSquareSymbol &&
      firstSquareSymbol == secondSquareSymbol &&
      firstSquareSymbol == ThirdSquareSymbol
    )
      winner = firstSquareSymbol;
  }
  function handleName(symbol, newName) {
    setName((prevName) => {
      return {
        ...prevName,
        [symbol]: newName,
      };
    });
  }
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
          <Player
            initialName="first player"
            symbol="X"
            active={activePlayer}
            setName={handleName}
          />
          <Player
            initialName="second player"
            symbol="O"
            active={activePlayer}
            setName={handleName}
          />
        </ol>
        <GameOver
          result={winner}
          Board={gameBoard}
          gameTurns={setGameTurns}
          name={name}
          winner={winner}
        />
        <GameBoard Board={gameBoard} handleActive={handleActive} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
