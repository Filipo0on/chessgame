// tslint:disable:no-console
/*import * as React from "react";
import { Query } from "react-apollo";
import { GET_GAMES } from "../../dist/graphql/queries/game/getGames";

import LobbyCreateGameComponent from "src/components/lobby/LobbyCreateGame";
import LobbyFilterComponent from "src/components/lobby/LobbyFilter";
import LobbySeeksComponent from "src/components/lobby/LobbySeeks";

class LobbyComponent extends React.Component<any, any> {
  public render() {
    return (
      <Query query={GET_GAMES}>
        {({ loading, error, data }) => {
          if (error) { return <>Something went wrong! {error}</>; }
          if (loading || !data) { return "loading..."; }

          const games = data.getGames
          console.log('data', games) // This console log is only here to vew data now, to display how the query works. 
                                    //  It will be removed at a later date.
          return (
            <div>
              <LobbySeeksComponent />
              <LobbyFilterComponent />
              <LobbyCreateGameComponent />
            </div>
          );
        }}
      </Query>
    );
  }
}

export default LobbyComponent;*/
// tslint:disable:no-console
import * as React from "react";


import LobbyCreateGameComponent from "src/components/lobby/LobbyCreateGame";
import LobbyFilterComponent from "src/components/lobby/LobbyFilter";
import LobbySeeksComponent from "src/components/lobby/LobbySeeks";

class LobbyComponent extends React.Component<any, any> {
  public render() {
    
      
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