import * as React from "react";
import GameStatus from "./gameInfo/GameStatus";
import GamePlayers from "./gameInfo/GamePlayers";
import { InfoStyles } from "../../styles/game/Game";
import { IGamePlayerProps, IGameProps } from "./interfacesGame";

class GameInfo extends React.Component<IGamePlayerProps & IGameProps, any> {
  public render() {
    return (
      <InfoStyles>
        <GameStatus active={true} />
        {/* <GameWinner /> TO BE IMPLEMENTED */}
        <GamePlayers
          creator={this.props.creator}
          opponent={this.props.opponent}
        />
      </InfoStyles>
    );
  }
}

export default GameInfo;
