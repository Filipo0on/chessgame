import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import LobbyComponent from './lobby/LobbyComponent';
import GameComponent from './game/GameComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
              <div>
                <Route path="/" exact component={LobbyComponent} />
                <Route path="/game/:id" component={GameComponent} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
