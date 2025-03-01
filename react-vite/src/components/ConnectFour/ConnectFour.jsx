import { useState } from "react";
import "./ConnectFour.css";

export default function ConnectFour() {
  const [board, setBoard] = useState(Array(6).fill(Array(7).fill(null)));
  const [isRedNext, setIsRedNext] = useState(true);

  const handleClick = (column) => {
    const newBoard = [...board];
    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = isRedNext ? "Red" : "Yellow";
        setBoard(newBoard);
        setIsRedNext(!isRedNext);
        break;
      }
    }
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Winner: ${winner}`
    : `Next Player: ${isRedNext ? "Red" : "Yellow"}`;

  return (
    <div className="connect-four">
      <h2>Connect Four</h2>
      <div className="board">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <button
                key={colIndex}
                onClick={() => handleClick(colIndex)}
                className={`cell ${cell}`}
              >
                {cell ? cell.charAt(0) : ""}
              </button>
            ))}
          </div>
        ))}
      </div>
      <p>{status}</p>
      <button onClick={() => setBoard(Array(6).fill(Array(7).fill(null)))}>Restart</button>
    </div>
  );
}

function calculateWinner(board) {
  // Check horizontal, vertical, and diagonal lines for a winner
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 7; col++) {
      if (board[row][col]) {
        const currentPlayer = board[row][col];

        // Check horizontally
        if (col + 3 < 7 &&
          currentPlayer === board[row][col + 1] &&
          currentPlayer === board[row][col + 2] &&
          currentPlayer === board[row][col + 3]) {
          return currentPlayer;
        }

        // Check vertically
        if (row + 3 < 6 &&
          currentPlayer === board[row + 1][col] &&
          currentPlayer === board[row + 2][col] &&
          currentPlayer === board[row + 3][col]) {
          return currentPlayer;
        }

        // Check diagonal (bottom-left to top-right)
        if (row + 3 < 6 && col + 3 < 7 &&
          currentPlayer === board[row + 1][col + 1] &&
          currentPlayer === board[row + 2][col + 2] &&
          currentPlayer === board[row + 3][col + 3]) {
          return currentPlayer;
        }

        // Check diagonal (top-left to bottom-right)
        if (row - 3 >= 0 && col + 3 < 7 &&
          currentPlayer === board[row - 1][col + 1] &&
          currentPlayer === board[row - 2][col + 2] &&
          currentPlayer === board[row - 3][col + 3]) {
          return currentPlayer;
        }
      }
    }
  }
  return null;
}
