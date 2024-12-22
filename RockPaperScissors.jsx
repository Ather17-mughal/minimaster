import { useState } from 'react';
import  './RockPaperScissorsGame.css';
const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [
    computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const choices = ['rock', 'paper', 'scissors'];
  const images = {
    rock: "/assetds/rock.png", 
    paper: "/assets/paper.png", 
    scissors: "/assets/scissors.png", 
  };

  
  const handlePlayerChoice = (choice) => {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    calculateWinner(choice, computerChoice);
    setGameOver(true);
  };

  // choosing winner 
  const calculateWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a draw!");
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setResult("You win!");
    } else {
      setResult("Computer wins!");
    }
  };

  const restartGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setGameOver(false);
  };

  return (
    <div className="rock-paper-scissors">
      <h1>Rock-Paper-Scissors</h1>
      {!gameOver ? (
        <div className="choices">
          <button onClick={() => handlePlayerChoice('rock')} className="choice-button">
            <img src={images.rock} alt="Rock" className="choice-image" />
          </button>
          <button onClick={() => handlePlayerChoice('paper')} className="choice-button">
            <img src={images.paper} alt="Paper" className="choice-image" />
          </button>
          <button onClick={() => handlePlayerChoice('scissors')} className="choice-button">
            <img src={images.scissors} alt="Scissors" className="choice-image" />
          </button>
        </div>
      ) : (
        <div className="result">
          <h2>{result}</h2> {/* Win/Draw/Loss message */}
          
          <div>
            <h3>You chose:</h3>
            <img src={images[playerChoice]} alt={playerChoice} className="choice-image" />
          </div>
          
          <div>
            <h3>Computer chose:</h3>
            <img src={images[computerChoice]} alt={computerChoice} className="choice-image" />
          </div>

          <button className="restart-button" onClick={restartGame}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default RockPaperScissors;
