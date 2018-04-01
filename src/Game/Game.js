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
                  <td className={this.getColor(reserveItem)} onClick={(e) => this.reserveAction(reserveItem, e)}>
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
                  <td className={this.getColor(rowAir[2])} onClick={(e) => this.action(rowAir[2], e)}>
                    <Piece piece={rowAir[2].piece}/>
                  </td>
                  <td className={this.getColor(rowAir[3])} onClick={(e) => this.action(rowAir[3], e)}>
                    <Piece piece={rowAir[3].piece}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* table de gauche terrestre */}
        {/* <div className="tt plateau">
          <table>
            <tbody>
              <tr ng-repeat="ligne in plateauCtrl.plateauTerre">
                <td ng-repeat="cellule in ligne" ng-style="plateauCtrl.isSelect(cellule) ? plateauCtrl.state.select_color : {}" ng-click="plateauCtrl.action(cellule)">
                  <img ng-if="cellule.piece != null"
                    src='img/piece/{{cellule.piece.joueur}}-{{cellule.piece.type}}.png'/>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* table de gauche maritime */}
        {/* <div className="tm plateau">
          <table>
            <tbody>
              <tr ng-repeat="ligne in plateauCtrl.plateauMer">
                <td ng-repeat="cellule in ligne" ng-style="plateauCtrl.isSelect(cellule) ? plateauCtrl.state.select_color : {}" ng-click="plateauCtrl.action(cellule)">
                  <img ng-if="cellule.piece != null"
                    src='img/piece/{{cellule.piece.joueur}}-{{cellule.piece.type}}.png'/>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* table de gauche airien parti 2 */}
        {/* <div className='ta ta_right plateau'>
          <table>
            <tbody>
              <tr ng-repeat="ligne in plateauCtrl.plateauAir">
                <td ng-style="plateauCtrl.isSelect(ligne[0]) ? plateauCtrl.state.select_color : {}" ng-click="plateauCtrl.action(ligne[0])">
                  <img ng-if="ligne[0].piece != null"
                    src='img/piece/{{ligne[0].piece.joueur}}-{{ligne[0].piece.type}}.png'/>
                </td>
                <td ng-style="plateauCtrl.isSelect(ligne[1]) ? plateauCtrl.state.select_color : {}" ng-click="plateauCtrl.action(ligne[1])">
                  <img ng-if="ligne[1].piece != null"
                    src='img/piece/{{ligne[1].piece.joueur}}-{{ligne[1].piece.type}}.png'/>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}

        {/* reserve j2 */}
        {/* <div className='recrutement'>
          <table>
            <tbody>
              <tr ng-repeat="piece_res_j2 in plateauCtrl.reserve.j2">
                <td ng-style="plateauCtrl.isSelect(piece_res_j2) ? plateauCtrl.state.select_color : {}" ng-click="plateauCtrl.reserve_action(piece_res_j2)">
                  <img src='img/piece/{{piece_res_j2.joueur}}-{{piece_res_j2.type}}.png'/>
                </td>
              </tr>
            </tbody>
          </table>
        </div> */}
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
      if (   (( this.state.plateau.isTurnOfP1) && (cell.piece.joueur == 'p1'))
         || ((!this.state.plateau.isTurnOfP1) && (cell.piece.joueur == 'p2'))) {
        console.log('select une nouvelle cellule');
        this.state.cellSelect = cell;
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
    if (   (( this.state.plateau.isTurnOfP1) && (piece.joueur == 'p1'))
       || ((!this.state.plateau.isTurnOfP1) && (piece.joueur == 'p2'))) {
      this.state.cellSelect = piece;
    }
  }
  getColor(cell) {
    return cell == this.state.cellSelect ? 'cell-selected' : '';
  }
}

export default Game;
