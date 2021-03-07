import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './TicTacToe';


const LearReact = () => (
  <div>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </div>
);

const App = () => {
  return (
    <div className="App">
      {/* <LearReact /> */}
      <Game />
    </div>
  );
}

export default App;
