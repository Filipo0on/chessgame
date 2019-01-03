// tslint:disable:no-console
import * as React from 'react';


import Chessground from 'src/dist/Chessground';
import { GameBoardStyles } from '../../styles/game/Game'

import 'react-chessground/dist/styles/chessground.css'
// interface IGameBoardProps {
//   chess: any;
// }
class GameBoard extends React.Component<any, any> {
  public onComponentDidMount() {
      // something
  }
  public render() {

    return (
      <GameBoardStyles>
        <Chessground name="chess" />
      </GameBoardStyles>
    );
  }
}

export default GameBoard;
