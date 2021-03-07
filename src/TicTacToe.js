import React, { useState } from 'react';
import './App.css';

const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  
  const Game = () => {
    const [state, setState] = useState({
      squares: [],
      xIsNext: false,
    });
  
    const handleClick = (i) => {
      const squares = state.squares.slice();
      const winner = calculateWinner(squares);
      if ( winner || squares[i]) {
        return;
      }
      squares[i] = state.xIsNext ? "X" : "O";
      setState(s => ({
        ...s,
        squares,
        xIsNext: !s.xIsNext,
      }));
    }

    const Square = ({ value, onClick}) => (
        <button className="square" onClick={onClick}>
          {value}
        </button>
    );
  
    const renderSquare = (i) => (
      <Square
          value={state.squares[i]}
          onClick={() => handleClick(i)}
        />
    );
  
    const Board = () => (
      <div className='board'>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
      </div>
    );

    const GameStatus = () => {
        const winner = calculateWinner(state.squares);
        if (!winner) {
            return null;
        }
        return (
            <div className="game-info">
            <div>Winner: {winner}</div>
            </div>
        );
    };

    const Title = () => (
        <h1>Tic Tac Toe</h1>
    );
  
    return (
      <div className='game'>
        <Title />
        <Board />
        <GameStatus/>
      </div>
    )
  };

  export default Game;