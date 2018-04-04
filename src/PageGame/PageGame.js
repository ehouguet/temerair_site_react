import React, { Component } from 'react';
import Game from './Game/Game';

class PageGame extends Component {
  render() {
    return (
      <Game is-multi={false}/>
    );
  }
}

export default PageGame;
