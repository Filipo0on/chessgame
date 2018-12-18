import {BehaviorSubject} from 'rxjs';
// const Chess = require('chess.js').Chess;

const defaultState = {
  message: 'test',
};

const subject = new BehaviorSubject(defaultState);

class GameStore {
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

}

export default new GameStore();