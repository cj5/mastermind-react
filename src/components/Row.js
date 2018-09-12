import React, { Component } from 'react';
import GuessSpots from './GuessSpots'
import KeySpots from './KeySpots'

class Row extends React.Component {
  render() {
    return (
      <div className={this.props.rowNum}>
        <GuessSpots />
        <KeySpots />
      </div>
    );
  }
}

export default Row;