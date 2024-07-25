export default function GameBoard({ handleActive, Board }) {
  // const [symbol, setSymbol] = useState(initialGameBoard);
  // function handleSymbol(row, col) {
  //   const copy = symbol.map((array) => array.slice());
  //   copy[row][col] = active;
  //   setSymbol(copy);
  //   handleActive();
  // }
  return (
    <ol id="game-board">
      {Board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => handleActive(rowIndex, colIndex)}
                  disabled={playerSymbol !== null ? true : false}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
