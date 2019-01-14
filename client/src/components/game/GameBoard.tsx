// tslint:disable:no-console
// tslint:disable:no-var-requires
import * as React from 'react';
import Chessground from 'src/dist/Chessground';
import { GameBoardStyles } from '../../styles/game/Game'
import GameStore from '../../store/GameStore';
import 'react-chessground/dist/styles/chessground.css'
    
class GameBoard extends React.Component<any, any> {
  // public chess = new Chess()
  public constructor(props: any) {
    super(props);
    this.state = {
      fen: '',
      history: null,
      checkmate: false
    }
  }
  public componentDidMount() {
    GameStore.getSubject().subscribe((state) => {
      this.setState({
        fen: state.fen
      })
    })
      // something
  }
  public move = (from: string, to: string) => {
    GameStore.move({ from, to })
    GameStore.getSubject().subscribe((state) => {
      this.setState({
        checkmate: state.checkmate
      })
    })
  }
  public render() {
    return (
      <GameBoardStyles>
        {this.state.checkmate ? "Game Over" : false}
        <Chessground name="chess" 
          fen={this.state.fen}
          onMove={this.move} 
        />
      </GameBoardStyles>
    );
  }
}

export default GameBoard;
