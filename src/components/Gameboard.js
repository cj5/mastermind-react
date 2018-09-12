import React, { Component } from 'react';
import Row from './Row';

let rowArray = [];
for (let i = 1; i <= 10; i++) {
  rowArray.push(i);
}

class Gameboard extends React.Component {
  render() {
    return (
      <div className="gameboard-wrapper">
        <h1>Mastermind</h1>
        <div className="gameboard">
          { rowArray.map((i) => <Row key={i} rowNum={'row row-' + i} rowLabel={i} />) }
        </div>
      </div>
    );
  }
}

export default Gameboard;