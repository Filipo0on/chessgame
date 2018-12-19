import * as React from 'react';

import Chessground from 'src/dist/Chessground';

import 'react-chessground/dist/styles/chessground.css'

class GameBoardComponent extends React.Component<any, any> {
  public onComponentDidMount() {
      // something
  }
  public render() {
    return (
      <div>
        GameBoardComponent
        <Chessground name="chess" />
      </div>
    );
  }
}

export default GameBoardComponent;
