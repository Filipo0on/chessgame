// tslint:disable:no-console
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
    const moves = [{ color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' },
                   { color: 'b', from: 'e7', to: 'e5', flags: 'b', piece: 'p', san: 'e5' },
                   { color: 'w', from: 'f2', to: 'f4', flags: 'b', piece: 'p', san: 'f4' },
                   { color: 'b', from: 'e5', to: 'f4', flags: 'c', piece: 'p', captured: 'p', san: 'exf4' }];
                   
    const moveMadeWhite = moves.filter(move => move.color === 'w' ? move.to : false);

    const moveMadeBlack = moves.filter(move => move.color === 'b' ? move.to : false);

    const displayWhiteMoves = moveMadeWhite.map((move, index) => {
      return <GamePlayerHistoryPlayersMove key={index.toString()}>{move.to}</GamePlayerHistoryPlayersMove>
    })

    const displayBlackMoves = moveMadeBlack.map((move, index) => {
      return <GamePlayerHistoryPlayersMove key={index.toString()}>{move.to}</GamePlayerHistoryPlayersMove>
    })
    
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
           {displayWhiteMoves}
          </GamePlayerHistoryPlayers>
          <GamePlayerHistoryPlayers>
           {displayBlackMoves}
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
