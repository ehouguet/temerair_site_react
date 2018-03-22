import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Regle from './Regle/Regle';
import Home from './Home/Home';
import css from './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div><Link to="/">Home</Link></div>
	  <div><Link to="/regle">Regle</Link></div>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/regle" component={Regle}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
