
import * as React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Lobby from './containers/lobby/Lobby';
import AwaitGame from './components/lobby/LobbyAwaitGame';
import Game from './containers/game/Game';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path='/' exact={true} component={Lobby} />
          <Route path='/game/:id' component={Game} />
          <Route path='/await/05' component={AwaitGame} />
        </div>
      </Router>
    );
  }
}

export default App;
