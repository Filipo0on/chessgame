
import * as React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Lobby from './containers/lobby/Lobby';
import Game from './containers/game/Game';
import './App.css';
import AwaitGame from './components/lobby/LobbyAwaitGame';


class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path='/' exact={true} component={Lobby} />
          <Route path='/game/:id' component={Game} />
          <Route path='/await/:id' component={AwaitGame} />
        </div>
      </Router>
    );
  }
}

export default App;
