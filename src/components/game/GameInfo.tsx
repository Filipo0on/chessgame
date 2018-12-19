import * as React from 'react';
import GameStatus from './gameInfo/GameStatus'
import { InfoStyles } from "../../styles/game/Game";

class GameInfoComponent extends React.Component<any, any> {
  public render() {
    return (
      <InfoStyles>
        <GameStatus status={"ACTIVE"} />
        {/* <GameWinner /> */}
      </InfoStyles>
      )
  }
}

export default GameInfoComponent;
