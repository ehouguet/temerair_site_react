import React, { Component } from 'react';
import './Home.css';

import avionFile from './avion.svg';
import bateauFile from './bateau.svg';
import charFile from './char.svg';

class Home extends Component {
  MOVEMENT = 20;
  P1_RAPPORT_X = - 4 / 9;
  P2_RAPPORT_Y = - 1 / 12;
  P3_RAPPORT_X = - 2 / 10;

  AVION_WIDTH = 1375;
  BATEAU_WIDTH = 1375;
  CHAR_WIDTH = 1375;

  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      avionSvg: '',
      bateauSvg: '',
      charSvg: '',
    };

    fetch(avionFile)
      .then(response => response.text())
      .then(avionSvg => {
        this.setState({avionSvg: avionSvg});
      });
    fetch(bateauFile)
      .then(response => response.text())
      .then(bateauSvg => {
        this.setState({bateauSvg: bateauSvg});
      });
    fetch(charFile)
      .then(response => response.text())
      .then(charSvg => {
        this.setState({charSvg: charSvg});
      });
  }

  render() {

    let height_mv = this.state.height + this.MOVEMENT;
    let width_mv = this.state.width + this.MOVEMENT;
    return (
      <div id="home-svg-container" className="background">

      {/* <a href="../PageGame/PageGame.js"><img className="fond" src ={fondrouge} height="100%" width="100%" alt="background" z-index="2"/></a>
      <a href="../About/About.js"><img className="fond" src ={fondvert} height="100%" width="100%" alt="background" z-index="1"/></a>
      <a href="../Regle/Regle.js"><img className="fond" src ={fondbleu} height="100%" width="100%" alt="background" z-index="0"/></a>
      <img className="fond" src={trait} height="100%" width="100%" alt="background" z-index="3"/>
      <img className="fond" src={avion} height="100%" width="100%" alt="background" z-index="3"/>
      <img className="fond" src={bateau} height="100%" width="100%" alt="background" z-index="3"/>
      <img className="fond" src={char} height="85%" width="75%" alt="background"/> */}
        <svg width={this.state.width} height={this.state.height}>
          <g transform={`translate(${this.state.width / 2}, ${this.state.height / 2})`}>
            <path 
              className="terre"
              d={`M0 0
              L${width_mv * this.P1_RAPPORT_X} ${-height_mv / 2}
              H${-width_mv / 2}
              V${height_mv / 2} 
              H${width_mv * this.P3_RAPPORT_X}
              `}
              onClick={() => this.onClickMenu.bind(this)("/")}></path>
            <path 
              className="mer"
              d={`M0 0
              L${width_mv / 2} ${height_mv * this.P2_RAPPORT_Y}
              V${height_mv / 2}
              H${width_mv * this.P3_RAPPORT_X}
              `} 
              onClick={() => this.onClickMenu.bind(this)("/Game")}>
            </path>
            <path 
              className="air"
              d={`M0 0
              L${width_mv / 2} ${height_mv * this.P2_RAPPORT_Y}
              V${-height_mv / 2}
              H${width_mv * this.P1_RAPPORT_X}
              `} 
              onClick={() => this.onClickMenu.bind(this)("/regle")}>
            </path>
            <path 
              className="trait"
              d={`M0 0
              L${width_mv * this.P1_RAPPORT_X} ${-height_mv / 2}
              M0 0
              L${width_mv * this.P3_RAPPORT_X} ${height_mv / 2}
              M0 0
              L${width_mv / 2} ${height_mv * this.P2_RAPPORT_Y}
              `} >
            </path>
          </g>
            <g transform={`scale(${this.state.width / this.AVION_WIDTH})`} dangerouslySetInnerHTML={{__html: this.state.avionSvg}}></g>
            <g transform={`scale(${this.state.width / this.BATEAU_WIDTH}) translate(0, ${this.state.height*1/10})`} dangerouslySetInnerHTML={{__html: this.state.bateauSvg}}></g>
            <g transform={`scale(${this.state.width / this.CHAR_WIDTH * 2 / 3}) translate(${-this.state.width*1/8}, ${this.state.height*1/5})`} dangerouslySetInnerHTML={{__html: this.state.charSvg}}></g>
        </svg>
      </div>
    );
  }

  onClickMenu(path) {
    this.props.history.push(path);
  }

  componentDidMount() {
    let width = document.getElementById('home-svg-container').clientWidth;
    let height = document.getElementById('home-svg-container').clientHeight;
    
    if (width !== this.state.width) this.setState({width: width});
    if (height !== this.state.height) this.setState({height: height});
  }
  componentDidUpdate() {
    let width = document.getElementById('home-svg-container').clientWidth;
    let height = document.getElementById('home-svg-container').clientHeight;
    
    if (width !== this.state.width) this.setState({width: width});
    if (height !== this.state.height) this.setState({height: height});
  }
}

export default Home;
