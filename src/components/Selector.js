import React, { Component } from 'react';

class Selector extends React.Component {
  render() {
    return (
      <div className="selector-wrapper">
        <div className="selector-spot color-1"></div>
        <div className="selector-spot color-2"></div>
        <div className="selector-spot color-3"></div>
        <div className="selector-spot color-4"></div>
        <div className="selector-spot color-5"></div>
        <div className="selector-spot color-6"></div>
      </div>
    );
  }
}

export default Selector;