import React, { useState, useEffect } from 'react';
import './WhackAMole.css'; // css file of whack game 

const WhackAMole = () => {
  const [moles, setMoles] = useState(Array(9).fill(false)); // we have 9 positions to play 
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(30); // total time to play a game is 30 sec 
  const moleIntervalRef = React.useRef(null);

  // countdown fucntion 
  useEffect(() => { 
    if (timer > 0 && !gameOver) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown); 
    } else if (timer === 0) {
      setGameOver(true);
      clearInterval(moleIntervalRef.current); 
    }
  }, [timer, gameOver]);

  
  useEffect(() => {
    if (!gameOver) {
      startMoleInterval();
    }

    return () => clearInterval(moleIntervalRef.current); 
  }, [gameOver]);

  
  const startMoleInterval = () => {
    moleIntervalRef.current = setInterval(() => {
      showRandomMole();
    }, 1000);
  };

  // mole will appear at random places 
  const showRandomMole = () => {
    const randomIndex = Math.floor(Math.random() * 9);
    setMoles((prevMoles) => {
      const newMoles = Array(9).fill(false); // making sure mole will come 1 at a time 
      newMoles[randomIndex] = true;
      return newMoles;
    });
  };

  // whack (press) to kill the mole 
  const handleWhack = (index) => {
    if (moles[index]) {
      setScore((prevScore) => prevScore + 1);
      setMoles(Array(9).fill(false)); 
    }
  };

  
  const restartGame = () => {
    setScore(0);
    setTimer(30);
    setGameOver(false);
    clearInterval(moleIntervalRef.current);
    startMoleInterval();
  };

  return (
    <div className="whack-a-mole">
      <h1>Whack-a-Mole Game</h1>
      <div className="game-info">
        <p>Time Left: {timer} seconds</p>
        <p>Score: {score}</p>
      </div>

      <div className="grid">
        {moles.map((isMole, index) => (
          <div
            key={index}
            className={`hole ${isMole ? 'mole' : ''}`}
            onClick={() => handleWhack(index)}
          >
            {isMole && <div className="mole-image">🐾</div>}
          </div>
        ))}
      </div>

      {gameOver && (
        <div className="game-over">
          <h2>Game Over! Your Score: {score}</h2>
          <button className="restart-button" onClick={restartGame}>
            Restart Game
          </button>
        </div>
      )}
    </div>
  );
};

export default WhackAMole;
