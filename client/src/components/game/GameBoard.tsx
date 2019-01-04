import * as React from 'react';

import Chessground from 'src/dist/Chessground';
import { GameBoardStyles } from '../../styles/game/Game'

import 'react-chessground/dist/styles/chessground.css'
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
