import React, { Component } from 'react';
import PropTypes from 'prop-types';


import imgP1A_A from './p1-A_A.png'; // eslint-disable-line camelcase
import imgP1A_B from './p1-A_B.png'; // eslint-disable-line camelcase
import imgP1Dist from './p1-dist.png';
import imgP1Pion from './p1-pion.png';
import imgP1QG from './p1-QG.png';
import imgP2A_A from './p2-A_A.png'; // eslint-disable-line camelcase
import imgP2A_B from './p2-A_B.png'; // eslint-disable-line camelcase
import imgP2Dist from './p2-dist.png';
import imgP2Pion from './p2-pion.png';
import imgP2QG from './p2-QG.png';


const piecesImage = {
  p1: {
    A_A: imgP1A_A, // eslint-disable-line camelcase
    A_B: imgP1A_B, // eslint-disable-line camelcase
    dist: imgP1Dist, 
    pion: imgP1Pion,
    QG: imgP1QG,
  },
  p2: {
    AA: imgP2A_A, // eslint-disable-line camelcase
    AB: imgP2A_B, // eslint-disable-line camelcase
    dist: imgP2Dist,
    pion: imgP2Pion,
    QG: imgP2QG,
  },
};


class Piece extends Component {

  constructor(props) {
    super(props);
    this.state = {
      piecesImage: piecesImage,
    };
  }

  render() {
    if (!this.props.piece) {
      return null;
    }
    return (
      <img src={this.state.piecesImage[this.props.piece.player][this.props.piece.type]}/>
    );
  }

}

Piece.propTypes = {
  piece: PropTypes.object,
};

export default Piece;
