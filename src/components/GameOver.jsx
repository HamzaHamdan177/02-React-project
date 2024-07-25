export default function GameOver({ result, gameTurns, name, winner }) {
  let theFinalName = "";
  if (winner == "O") theFinalName = name.O;
  else theFinalName = name.X;
  function handleReset() {
    // Board.forEach((row, rowIndex) => {
    //   row.forEach((col, colIndex) => {
    //     Board[rowIndex][colIndex] = null;
    //   });
    // }); My way to restart the game we fixed as we made the board in deep copy and this fixed IT!!!

    gameTurns([]);
  }
  return result == 9 ? (
    <div id="game-over">
      <h2>DRAW!</h2>
      <p>no one won!</p>
      <button onClick={handleReset}>Rematch!</button>
    </div>
  ) : result != "" ? (
    <div id="game-over">
      <h2>GAME OVER!</h2>
      <p>{theFinalName} WON!</p>
      <button onClick={handleReset}>Rematch!</button>
    </div>
  ) : null;
}
