import React, { Component } from 'react';
import './Home.css';
import Image from './fond.png';

class Home extends Component {
  render() {
    return (
      <div className="background">

        <img src ={Image} width="100%" alt="background"
        useMap="#Areas"/>

        <map name="Areas">
          <area shape="poly" coords = "0,0,0,1000,290,1000,630,365,100,0" alt="Game" href="../Game/Game.js"></area>
          <area shape="circle" coords="90,58,3" alt="About" href="../About/About.js"></area>
          <area shape="circle" coords="124,58,8" alt="Contact" href="../Regle/Regle.js"></area>
        </map>

      </div>
    );
  }
}

export default Home;
