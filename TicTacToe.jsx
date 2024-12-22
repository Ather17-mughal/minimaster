import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const calculateWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || gameOver) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);

    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
    } else {
      setIsXNext(!isXNext);
    }
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setGameOver(false);
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className="status">
        {winner ? `${winner} wins!` : `Next player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <button key={index} className="cell" onClick={() => handleClick(index)}>
            {cell}
          </button>
        ))}
      </div>
      {gameOver && (
        <button className="restart-button" onClick={restartGame}>
          Restart Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
