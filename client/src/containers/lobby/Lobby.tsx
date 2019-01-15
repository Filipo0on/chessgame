// tslint:disable:no-console
import * as React from "react";
import LobbyCreateGameComponent from "src/components/lobby/LobbyCreateGame";
import LobbyFilterComponent from "src/components/lobby/LobbyFilter";
import LobbySeeksComponent from "src/components/lobby/LobbySeeks";

class LobbyComponent extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <LobbyCreateGameComponent />
        <LobbySeeksComponent />
        <LobbyFilterComponent />
      </div>
    );
  }
}

export default LobbyComponent;
