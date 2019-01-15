// tslint:disable:no-console
// tslint:disable:no-var-requires
import {BehaviorSubject} from 'rxjs';
const Chess = require('chess.js');
import { client } from '../index';
import { NEW_MOVE } from '../dist/graphql/mutations/game/newMove';

const defaultState = {
  fen: '',
  history: [],
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
    public mutate = () => {
      const hist: any = subject.value.history[subject.value.history.length-1];
      const history = {
        color: hist.color,
        from: hist.from,
        to: hist.to,
        piece: hist.piece,
        flags: hist.flags,
        san: hist.san,
        captured: hist.captured,
        fen: subject.value.fen
    }
    client.mutate({
      variables: { 
        id: "1", 
        history
    },
      mutation: NEW_MOVE
    })
    .then(result => { console.log('Result: ', result) })
    .catch(error => { console.log('Error: ', error) })
    }
    public move = (move: any) => {
      this.chess.move(move)
      if(this.chess.in_checkmate()) {
          this.chess.game_over()
          this.setState({
            fen: this.chess.fen(),
            checkmate: true
          })
          this.mutate()
      } else if(this.chess.in_draw()  || this.chess.in_stalemate() || this.chess.insufficient_material()) {
          this.chess.game_over()
      } else {
        this.setState({
          fen: this.chess.fen(),
          history: this.chess.history({ verbose: true })
        })
        this.mutate()
      }
    }
}

export default new GameStore();