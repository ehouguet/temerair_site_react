import React, { Component } from 'react';
import Game from './Game/Game';
import Players from './Players/Players';
import Rename from './Rename/Rename';
import pageGameStyle from './PageGame.css';
import { Container, Row, Col } from 'reactstrap';
import socketIO from 'socket.io-client';

const HOST_WITHOUT_PORT = window.location.host.split(':')[0];
const SOCKET_URL = HOST_WITHOUT_PORT + ':3010';
console.log('SOCKET_URL : ', SOCKET_URL)

class PageGame extends Component {

  
  constructor(props) {
    super(props);

    let socket = socketIO( SOCKET_URL);

    this.state = {
      socket: socket,
      gameState: 'choice', // choice / wait / game
    };

    socket.on('partie:start', () => this.setState({ gameState: 'game' }) );
    socket.on('partie:exit', (playerNameGotOut) => {
      alert(`le joueur ${playerNameGotOut} a quiter la partie.`);
      this.setState({ gameState: 'choice' });
    });
    socket.on('plateau:victoire', (playerWinner) => {
      let color = playerWinner==='p1' ? 'orange' : 'rouge';
      alert(`le joueur ${color} a gagné la partie.`);
      this.setState({ gameState: 'choice' });
    });

    socket.on('player:requestMatch', (playerName) => {
      let wantPlay = window.confirm(`le joueur ${playerName} veux vous affronter.`);
      socket.emit(wantPlay ? 'player:requestMatchAccept' : 'player:requestMatchReject');
    });
    
  }

  render() {
    return (
      <Container className={pageGameStyle.pageGame}>
        <Row className="header">
          <Col>
            <Rename socket={this.state.socket}/>
          </Col>
        </Row>
        <Row className="body">
          <Col className="game">
            {{
              choice:(<div><button onClick={() => this.lunchLocalGame.bind(this)()}>local</button><button onClick={() => this.lunchMultiGame.bind(this)()}>multi</button></div>),
              wait:(<div>wait</div>),
            }[this.state.gameState]}
            <div className={this.state.gameState === 'game' ? '' : 'gameHide'}>
              <Game socket={this.state.socket}/>
            </div>
          </Col>
          <Col className="menu-right">
            <Row className="list-joueur">
              <Players socket={this.state.socket}/>
            </Row>
            <Row className="chat"></Row>
          </Col>
        </Row>
      </Container>
    );
  }

  lunchLocalGame() {
    console.log('request a local game.');
    this.state.socket.emit('player:playLocal');
    this.setState({ gameState: 'wait' });
  }
  lunchMultiGame() {
    console.log('request a local game.');
    this.state.socket.emit('player:playMulti');
    this.setState({ gameState: 'wait' });
  }
}

export default PageGame;
