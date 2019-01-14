// tslint:disable:no-console
// tslint:disable:no-var-requires
import {BehaviorSubject} from 'rxjs';
const Chess = require('chess.js');

const defaultState = {
  fen: '',
  history: null,
  checkmate: false
};

const subject = new BehaviorSubject(defaultState);

class GameStore {
  public chess = new Chess()
    constructor() {
        this.setState({})
    }
    public setState(st: any) {
      const val = subject.value;
      const state = Object.assign({}, val, st);
      subject.next(state)
    }

    public getSubject() {
      return subject;
    }

    public updateDemoMessage(payload:any) {
      this.setState(payload)
    }
    public move = (move: any) => {
      this.chess.move(move)
      if(this.chess.in_checkmate()) {
          this.chess.game_over()
          this.setState({
            fen: this.chess.fen(),
            checkmate: true
          })
      } else if(this.chess.in_draw()) {
          this.chess.game_over()
      } else if(this.chess.in_stalemate()) {
          this.chess.game_over()
      } else if(this.chess.insufficient_material()) {
          this.chess.game_over()
      } else {
        this.setState({
          fen: this.chess.fen(),
          history: this.chess.history({ verbose: true })
        })
      }
    }
}

export default new GameStore();