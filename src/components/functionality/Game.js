import React, { useState, useEffect } from 'react';
import { minBy, maxBy } from 'lodash';
import GameUI from '../UI/GameUI';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [playerRecentMove, setPlayerRecentMove] = useState('');

  const choices = ['rock', 'paper', 'scissors'];

  useEffect(() => {
    if (playerChoice && computerChoice) {
      determineResult(playerChoice);
    }
  }, [playerChoice, computerChoice]);

  useEffect(() => {
    if (playerChoice) {
      setPlayerRecentMove(playerChoice);
    }
  }, [playerChoice]);

  const outcomes = {
    rock: {
      rock: 0,
      paper: -1,
      scissors: 1,
    },
    paper: {
      rock: 1,
      paper: 0,
      scissors: -1,
    },
    scissors: {
      rock: -1,
      paper: 1,
      scissors: 0,
    },
  };

  const makeComputerChoice = () => {
    if (playerRecentMove) {
      const bestMove = maxBy(choices, (choice) => outcomes[choice][playerRecentMove]);
      const worstMove = minBy(choices, (choice) => outcomes[choice][playerRecentMove]);

      // Randomly select between the best and worst move
      const computerMove = Math.random() < 0.5 ? bestMove : worstMove;
      setComputerChoice(computerMove);
    } else {
      // Initial move of computer is random move since playerRecentMove is empty
      const randomMove = choices[Math.floor(Math.random() * choices.length)];
      setComputerChoice(randomMove);
    }
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    makeComputerChoice();
  };

  const determineResult = (playerChoice) => {
    const outcome = outcomes[playerChoice][computerChoice];

    if (outcome === 0) {
      setResult('Tie!');
    } else if (outcome === 1) {
      setResult(`You win! Computer chose ${computerChoice}.`);
    } else {
      setResult(`Computer wins! It chose ${computerChoice}.`);
    }
  };

  return (
    <div>
      <GameUI choices={choices} handlePlayerChoice={handlePlayerChoice} playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
    </div>
  );
};

export default Game;