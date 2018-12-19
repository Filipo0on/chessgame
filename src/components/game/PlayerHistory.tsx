import * as React from 'react';
import { GamePlayerHistoryDiv , GamePlayerHistoryPlayerClock , GamePlayerHistoryPlayer , GamePlayerHistoryMove } from '../../styles/game/Game';

class PlayerHistory extends React.Component<any, any> {
  public render() {
    return (
      <GamePlayerHistoryDiv>
        <GamePlayerHistoryPlayerClock>
          05:00
        </GamePlayerHistoryPlayerClock>
        <GamePlayerHistoryPlayer>
          Motståndare
        </GamePlayerHistoryPlayer>
        <GamePlayerHistoryMove>
          Moves
        </GamePlayerHistoryMove>
        <GamePlayerHistoryPlayer>
          Medspelare
        </GamePlayerHistoryPlayer>
        <GamePlayerHistoryPlayerClock>
          05:00
        </GamePlayerHistoryPlayerClock>
      </GamePlayerHistoryDiv>
    );
  }
}

export default PlayerHistory;
