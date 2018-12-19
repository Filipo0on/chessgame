import * as React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "src/containers/game/Game";
import Lobby from "src/containers/lobby/Lobby";
import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route path="/" exact={true} component={Lobby} />
          <Route path="/game/:id" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;
