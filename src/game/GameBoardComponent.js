import React, { Component } from 'react';
import Chessground from 'react-chessground'
import 'react-chessground/dist/styles/chessground.css'

class GameBoardComponent extends Component {
  onComponentDidMount() {
  }
  render() {
    return (
      <div>
        GameBoardComponent
        <Chessground />
      </div>
    );
  }
}

export default GameBoardComponent;
