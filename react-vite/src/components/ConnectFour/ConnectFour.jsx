import { useState } from "react";
import "./ConnectFour.css";

export default function ConnectFour() {
  // Board state initialization
  const [board, setBoard] = useState(
    Array(6).fill().map(() => Array(7).fill(null))
  );
  const [isRedNext, setIsRedNext] = useState(true);
  const [hoverColumn, setHoverColumn] = useState(null);

  const handleClick = (column) => {
    // Check if the game is already won or column is full
    if (calculateWinner(board) || board[0][column]) {
      return;
    }

    // Create a deep copy of the board
    const newBoard = board.map(row => [...row]);
    
    // Find the first empty cell from bottom to top
    for (let row = 5; row >= 0; row--) {
      if (!newBoard[row][column]) {
        newBoard[row][column] = isRedNext ? "Red" : "Yellow";
        setBoard(newBoard);
        setIsRedNext(!isRedNext);
        break;
      }
    }
  };

  // Handle mouse movement over columns
  const handleMouseEnter = (column) => {
    setHoverColumn(column);
  };

  const handleMouseLeave = () => {
    setHoverColumn(null);
  };

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(row => row.every(cell => cell !== null));
  
  const status = winner 
    ? `Winner: ${winner}` 
    : isDraw 
      ? "Game ended in a draw!" 
      : `Next Player: ${isRedNext ? "Red" : "Yellow"}`;

  return (
    <div className="connect-four">
      <h2>Connect Four</h2>
      <div 
        className="board-container" 
        onMouseLeave={handleMouseLeave}
      >
        {/* Hover arrow indicator */}
        {hoverColumn !== null && !winner && !isDraw && !board[0][hoverColumn] && (
          <div 
            className="hover-arrow"
            style={{ left: `${hoverColumn * 70 + 35}px` }}
          >
            ▼
          </div>
        )}
        
        <div className="board">
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <button
                  key={colIndex}
                  onClick={() => handleClick(colIndex)}
                  onMouseEnter={() => handleMouseEnter(colIndex)}
                  className={`cell ${cell || ""}`}
                  disabled={winner || isDraw || board[0][colIndex] !== null}
                >
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="status">{status}</p>
      <button 
        className="restart-button"
        onClick={() => {
          setBoard(Array(6).fill().map(() => Array(7).fill(null)));
          setIsRedNext(true);
        }}
      >
        Restart
      </button>
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