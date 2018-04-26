import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Regle from './Regle/Regle';
import Home from './Home/Home';
import PageGame from './PageGame/PageGame';
import './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="page-header">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/regle">Regle</Link></div>
            <div><Link to="/Game">Game</Link></div>
          </div>
         
          <div className="page-body">
            <Route exact path="/" component={Home}/>
            <Route path="/regle" component={Regle}/>
<<<<<<< HEAD
            <Route path="/game" component={Game}/>
           
=======
            <Route path="/game" component={PageGame}/>
>>>>>>> c6e0b572751ad5a69941aef6a5783224f7ecf7f9
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
