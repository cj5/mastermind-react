import React, { Component } from 'react';
import './App.css';
import Gameboard from './components/Gameboard';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Gameboard />
      </div>
    );
  }
}

export default App;