import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TicTacToe from './components/TicTacToe';
import RockPaperScissors from './components/RockPaperScissors';
import WhackAMole from './components/WhackAMole';  // Import the WhackAMole component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
          <Route path="/whack-a-mole" element={<WhackAMole />} /> {/* Add WhackAMole route */}
        </Routes>
      </div>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="MainPage">
      <h1> ULTIMATE  MINI MASTER</h1>
      <p>Select a game to play:</p>
      <div className="game-selection">
        <Link to="/tic-tac-toe">
          <button className="game-button">Tic-Tac-Toe</button>
        </Link>
        <Link to="/rock-paper-scissors">
          <button className="game-button">Rock-Paper-Scissors</button>
        </Link>
        <Link to="/whack-a-mole"> {/* Link to Whack-a-Mole game */}
          <button className="game-button">Whack-a-Mole</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
