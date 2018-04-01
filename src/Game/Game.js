import React, { Component } from 'react';
import socket from 'socket.io-client';
import Piece from './Piece/Piece.js';
import './Game.css';

class Game extends Component {

  constructor(props) {
    super(props);
    this.state = {
      plateau: {
        plateauTerre: [],
        plateauMer: [],
        plateauAir: [],
        p1: {
          toPut: [],
          winArea: [],
        },
        p2: {
          toPut: [],
          winArea: [],
        },
        isTurnOfP1: true,
      },
      select_color: '',
    };

    this.socket = socket('localhost:3011');

    this.socket.on('plateau:reset', this.setPlateau.bind(this));
  }

  render() {
    return (
      <div>
        <div className="recrutement">
          <table>
            <tbody>
              {this.state.plateau.p1.toPut.map((reserveItem, i) => (
                <tr key={i}>
                  <td className={this.getColor(reserveItem, this.state.cellSelect)} onClick={(e) => this.reserveAction(reserveItem, e)}>
                    <Piece piece={reserveItem}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* table de gauche airien parti 1 */}
        <div className="ta ta_left plateau">
          <table>
            <tbody>
              {this.state.plateau.plateauAir.map((rowAir, i) => (
                <tr key={i}>
                  <td className={this.getColor(rowAir[2], this.state.cellSelect)} onClick={(e) => this.action(rowAir[2], e)}>
                    <Piece piece={rowAir[2].piece}/>
                  </td>
                  <td className={this.getColor(rowAir[3], this.state.cellSelect)} onClick={(e) => this.action(rowAir[3], e)}>
                    <Piece piece={rowAir[3].piece}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* table de gauche terrestre */}
        <div className="tt plateau">
          <table>
            <tbody>
              {this.state.plateau.plateauTerre.map((rowTerre, i) => (
                <tr key={i}>
                {rowTerre.map((cellTerre, j) => (
                  <td key={j} className={this.getColor(cellTerre, this.state.cellSelect)} onClick={(e) => this.action(cellTerre, e)}>
                    <Piece piece={cellTerre.piece}/>
                  </td>
                ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* table de gauche maritime */}
        <div className="tm plateau">
          <table>
            <tbody>
              {this.state.plateau.plateauMer.map((rowMer, i) => (
                <tr key={i}>
                {rowMer.map((cellMer, j) => (
                  <td key={j} className={this.getColor(cellMer, this.state.cellSelect)} onClick={(e) => this.action(cellMer, e)}>
                    <Piece piece={cellMer.piece}/>
                  </td>
                ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* table de gauche airien parti 2 */}
        <div className="ta ta_right plateau">
          <table>
            <tbody>
              {this.state.plateau.plateauAir.map((rowAir, i) => (
                <tr key={i}>
                  <td className={this.getColor(rowAir[0], this.state.cellSelect)} onClick={(e) => this.action(rowAir[0], e)}>
                    <Piece piece={rowAir[0].piece}/>
                  </td>
                  <td className={this.getColor(rowAir[1], this.state.cellSelect)} onClick={(e) => this.action(rowAir[1], e)}>
                    <Piece piece={rowAir[1].piece}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* reserve j2 */}
        <div className="recrutement">
          <table>
            <tbody>
              {this.state.plateau.p2.toPut.map((reserveItem, i) => (
                <tr key={i}>
                  <td className={this.getColor(reserveItem, this.state.cellSelect)} onClick={(e) => this.reserveAction(reserveItem, e)}>
                    <Piece piece={reserveItem}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    );
  }

  setPlateau(plateau) {
    console.log('new plateau : ', plateau);
    this.setState({
      plateau: {
        plateauTerre: plateau.plateauTerre,
        plateauMer: plateau.plateauMer,
        plateauAir: plateau.plateauAir,
        p1: {
          toPut: plateau.p1.toPut,
          winArea: plateau.p1.winArea,
        },
        p2: {
          toPut: plateau.p2.toPut,
          winArea: plateau.p2.winArea,
        },
        isTurnOfP1: plateau.isTurnOfP1,
      },
    });

  }
  
  action(cell) {
    console.log('-------------------- nouvelle action --------------------------');
    if (cell.piece != null) {
      if (   (( this.state.plateau.isTurnOfP1) && (cell.piece.joueur === 'p1'))
         || ((!this.state.plateau.isTurnOfP1) && (cell.piece.joueur === 'p2'))) {
        console.log('select une nouvelle cellule');
        this.setState({ cellSelect: cell });
        return;
      }
    }
    if (this.state.cellSelect) {
      console.log('action sur le pion');
      console.log("cell d'origine :");
      console.log(this.state.cellSelect);
      console.log('cell de destination :');
      console.log(cell);
      // PlateauService.action(this.state.cellSelect, cell);
    }
     
  }
  reserveAction(piece) {
    console.log('action sur reserve');
    if (   (( this.state.plateau.isTurnOfP1) && (piece.joueur === 'p1'))
       || ((!this.state.plateau.isTurnOfP1) && (piece.joueur === 'p2'))) {
        this.setState({ cellSelect: piece });
    }
  }
  getColor(cell, cellSelect) {
    return cell === cellSelect ? 'cell-selected' : '';
  }
}

export default Game;
