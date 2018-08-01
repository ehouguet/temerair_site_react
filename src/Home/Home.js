import React, { Component } from 'react';
import './Home.css';
import fondrouge from './fondrouge.bmp';
import fondvert from './fondvert.bmp';
import fondbleu from './fondbleu.bmp';
import trait from './trait3.bmp';
import avion from './Avion.svg';
import bateau from './bateau.svg';
import char from './Char2.svg';

class Home extends Component {
  render() {
    return (
      <div className="background">

      <a href="../PageGame/PageGame.js"><img className="fond" src ={fondrouge} height = "100%" width="100%" alt="background" z-index="2"/></a>
      <a href="../About/About.js"><img className="fond" src ={fondvert} height = "100%" width="100%" alt="background" z-index="1"/></a>
      <a href="../Regle/Regle.js"><img className="fond" src ={fondbleu} height = "100%" width="100%" alt="background" z-index="0"/></a>
      <img className="fond" src ={trait} height = "100%" width="100%" alt="background" z-index="3"/>

      </div>
    );
  }
}

export default Home;
