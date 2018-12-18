import React, { Component } from 'react';

import LobbyFilterComponent from './LobbyFilterComponent';
import LobbySeeksComponent from './LobbySeeksComponent';
import LobbyCreateGameComponent from './LobbyCreateGameComponent';

class LobbyComponent extends Component {
  render() {
    return (
      <div>
        <LobbySeeksComponent />
        <LobbyFilterComponent />
        <LobbyCreateGameComponent />
      </div>
    );
  }
}

export default LobbyComponent;
