import React, { Component } from 'react';

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
      <table>
        <tbody>
          {this.state.players.map((player) => (
            <tr>
              <td>{player.name || 'player'+player.id}</td>
              <td>{player.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Home;
