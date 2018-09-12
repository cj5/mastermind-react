import React, { Component } from 'react';
import GuessSpots from './GuessSpots'
import KeySpots from './KeySpots'

class Row extends React.Component {
  render() {
    return (
      <div className={this.props.rowNum}>
        <div className="row-label">{this.props.rowLabel}</div>
        <GuessSpots />
        <KeySpots />
      </div>
    );
  }
}

export default Row;