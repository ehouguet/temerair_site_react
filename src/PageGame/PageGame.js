import React, { Component } from 'react';
import Game from './Game/Game';
import pageGameStyle from './PageGame.css';
import { Container, Row, Col } from 'reactstrap';

class PageGame extends Component {
  render() {
    return (
      <Container className={pageGameStyle.pageGame}>
        <Row className="header">
          <Col></Col>
          <Col className="menu-right">
            <Row className="list-joueur"></Row>
            <Row className="chat"></Row>
          </Col>
        </Row>
        <Row className="body">
          <Col className="game">
            <Game is-multi={true}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageGame;
