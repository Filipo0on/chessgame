import {BehaviorSubject} from 'rxjs';
//const Chess = require('chess.js').Chess;

const defaultState = {
  message: 'test',
};

const subject = new BehaviorSubject(defaultState);

class GameStore {
    constructor() {
        this.setState({})
    }
    setState(st) {
      const val = subject.value;
      this.state = Object.assign({}, val, st);
      subject.next(val)
    }

    getSubject() {
      return subject;
    }

    updateDemoMessage(payload) {
      this.setState(payload)
    }

}

export default new GameStore();
