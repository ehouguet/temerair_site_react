import React, { Component } from 'react';
import socket from 'socket.io-client';
import Piece from './Piece/Piece.js';

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
              {this.state.plateau.p1.toPut.map(function(reserveItem, i) {
                return (
                  <tr key={i}>
                    <td ng-style="plateauCtrl.isSelect(piece_res_j1) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.reserve_action(piece_res_j1)">
                      <Piece piece={reserveItem}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* table de gauche airien parti 1 */}
        <div className="ta ta_left plateau">
          <table>
            <tbody>
              
              {this.state.plateau.plateauAir.map(function(rowAir, i) {
                return (
                  <tr key={i}>
                    <td ng-style="plateauCtrl.isSelect(ligne[2]) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.action(ligne[2])">
                      <Piece piece={rowAir[2].piece}/>
                    </td>
                    <td ng-style="plateauCtrl.isSelect(ligne[3]) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.action(ligne[3])">
                      <Piece piece={rowAir[3].piece}/>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* table de gauche terrestre */}
        {/* <div className="tt plateau">
          <table>
            <tbody>
              <tr ng-repeat="ligne in plateauCtrl.plateauTerre">
                <td ng-repeat="cellule in ligne" ng-style="plateauCtrl.isSelect(cellule) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.action(cellule)">
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
                <td ng-repeat="cellule in ligne" ng-style="plateauCtrl.isSelect(cellule) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.action(cellule)">
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
                <td ng-style="plateauCtrl.isSelect(ligne[0]) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.action(ligne[0])">
                  <img ng-if="ligne[0].piece != null"
                    src='img/piece/{{ligne[0].piece.joueur}}-{{ligne[0].piece.type}}.png'/>
                </td>
                <td ng-style="plateauCtrl.isSelect(ligne[1]) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.action(ligne[1])">
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
                <td ng-style="plateauCtrl.isSelect(piece_res_j2) ? plateauCtrl.info_parti.select_color : {}" ng-click="plateauCtrl.reserve_action(piece_res_j2)">
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
}

export default Game;
