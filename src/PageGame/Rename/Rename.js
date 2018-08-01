import React, { Component } from 'react';

class Home extends Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
    };

    this.socket = props.socket;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        name : <input type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
      </form>
    );
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    this.socket.emit('player:changeName', this.state.name);
    event.preventDefault();
    // return false;
  }
}

export default Home;
