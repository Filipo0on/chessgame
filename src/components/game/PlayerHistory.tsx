import * as React from 'react';
import { GamePlayerHistoryDiv , 
         GamePlayerHistoryPlayerClock , 
         GamePlayerHistoryPlayer , 
         GamePlayerHistory , 
         GamePlayerHistoryPlayers , 
         GamePlayerHistoryPlayersMove ,
         GamePlayerHistoryRounds ,
         GamePlayerRound } from '../../styles/game/Game';

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
        <GamePlayerHistory>
          <GamePlayerHistoryRounds>
            <GamePlayerRound>1</GamePlayerRound>
            <GamePlayerRound>2</GamePlayerRound>
            <GamePlayerRound>3</GamePlayerRound>
            <GamePlayerRound>4</GamePlayerRound>
            <GamePlayerRound>5</GamePlayerRound>
            <GamePlayerRound>6</GamePlayerRound>
            <GamePlayerRound>7</GamePlayerRound>
            <GamePlayerRound>8</GamePlayerRound>
            <GamePlayerRound>9</GamePlayerRound>
            <GamePlayerRound>10</GamePlayerRound>
          </GamePlayerHistoryRounds>
          <GamePlayerHistoryPlayers>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>e4</GamePlayerHistoryPlayersMove>
          </GamePlayerHistoryPlayers>
          <GamePlayerHistoryPlayers>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
            <GamePlayerHistoryPlayersMove>d3</GamePlayerHistoryPlayersMove>
          </GamePlayerHistoryPlayers>
        </GamePlayerHistory>
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
