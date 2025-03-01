import { useState } from "react";
import "./TicTacToe.css";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index] || calculateWinner(board)) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`;

  return (
    <div className="tic-tac-toe">
      <h2>Tic-Tac-Toe</h2>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} onClick={() => handleClick(index)} className="cell">
            {cell}
          </button>
        ))}
      </div>
      <p>{status}</p>
      <button onClick={() => setBoard(Array(9).fill(null))}>Restart</button>
    </div>
  );
}

function calculateWinner(board) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
  ];
  for (let [a, b, c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}
