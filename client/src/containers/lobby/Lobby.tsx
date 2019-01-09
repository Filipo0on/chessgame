// tslint:disable:no-console
import * as React from "react";
import { Query } from "react-apollo";
import { GET_GAMES } from "../../dist/graphql/queries/testQuery";

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

          console.log('data', data)
          // const games = data.getGames
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

export default LobbyComponent;
