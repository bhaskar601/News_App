import React, { Component } from 'react';
import spinner from './my.png';

export default class Spinner extends Component {
  render() {
    return (
      <img
        src={spinner}
        alt="Loading..."
        style={{ width: '40px', height: '40px', animation: 'spin 1s linear infinite' }}
      />
    );
  }
}
