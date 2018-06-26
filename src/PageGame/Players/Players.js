import React, { Component } from 'react';
import playersStyle from './Players.css';

class Home extends Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      players: [],
    };

    this.socket = props.socket;
    
    this.socket.on('players:update', (players) => this.setState({ players: players }) );
  }

  render() {
    return (
      <div className={playersStyle.players}>
        <table>
          <tbody>
            {this.state.players.map((player) => (
              <tr>
                <td>{player.name || 'player'+player.id}</td>
                <td>{player.state}</td>
                <td><button onClick={() => this.requestMatch.bind(this)(player)}>match</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  requestMatch(player) {
    this.socket.emit('players:request', player.id);
  }
}

export default Home;
