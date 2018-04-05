import React, { Component } from 'react';
import Game from './Game/Game';
import pageGameStyle from './PageGame.css';
// import { Container, Row, Col } from 'reactstrap';

class PageGame extends Component {
  render() {
    return (
      <div className={pageGameStyle.pageGame}>
        <div className="header"></div>
        <div className="body">
          <div className="game">
            <Game is-multi={true}/>
          </div>
          <div className="menu-right">
            <div className="list-joueur"></div>
            <div className="chat"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageGame;
