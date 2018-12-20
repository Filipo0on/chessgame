import * as React from 'react';
import GameStatus from './gameInfo/GameStatus'
import { InfoStyles } from "../../styles/game/Game";

class GameInfo extends React.Component<any, any> {
  public render() {
    return (
      <InfoStyles>
        <GameStatus id={'1'} />
        {/* <GameWinner /> */}
      </InfoStyles>
      )
  }
}

export default GameInfo;
