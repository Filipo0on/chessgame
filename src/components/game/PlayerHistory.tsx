// tslint:disable:no-console
import * as React from 'react';
import { GamePlayerHistoryDiv , 
         GamePlayerHistoryPlayerClock , 
         GamePlayerHistoryPlayer , 
         GamePlayerHistory , 
         GamePlayerHistoryPlayers, 
         GamePlayerHistoryPlayersMove,
         GamePlayerHistoryRounds,
         GamePlayerRound } from '../../styles/game/Game';
import GamePlayerClock from './GamePlayerClock';

class PlayerHistory extends React.Component<any, any> {
  public render() {
    const moves = [{ color: 'w', from: 'e2', to: 'e4', flags: 'b', piece: 'p', san: 'e4' },
                   { color: 'b', from: 'e7', to: 'e5', flags: 'b', piece: 'p', san: 'e5' },
                   { color: 'w', from: 'f2', to: 'f4', flags: 'b', piece: 'p', san: 'f4' },
                   { color: 'b', from: 'e5', to: 'f4', flags: 'c', piece: 'p', captured: 'p', san: 'exf4' },
                   { color: 'w', from: 'f2', to: 'f4', flags: 'b', piece: 'p', san: 'f4' }];
                   
    const moveMadeWhite = moves.filter(move => move.color === 'w' ? move.to : false);
    const moveMadeBlack = moves.filter(move => move.color === 'b' ? move.to : false);

    let lengthrows = 0;
    const displayWhiteMoves = moveMadeWhite.map((move, index) => {
      lengthrows ++
      return (
        <>
          <GamePlayerHistoryRounds>
            <GamePlayerRound>{lengthrows}</GamePlayerRound>
            <GamePlayerHistoryPlayersMove key={index.toString()}>{move.to}</GamePlayerHistoryPlayersMove>
          </GamePlayerHistoryRounds>
        </>
      )
    })
    
    const displayBlackMoves = moveMadeBlack.map((move, index) => {
      return <GamePlayerHistoryPlayersMove key={index.toString()}>{move.to}</GamePlayerHistoryPlayersMove>
    })

    return (
      <GamePlayerHistoryDiv>
        <GamePlayerHistoryPlayerClock>
          <GamePlayerClock />
        </GamePlayerHistoryPlayerClock>
        <GamePlayerHistoryPlayer>
          Motståndare
        </GamePlayerHistoryPlayer>
        <GamePlayerHistory>
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
        <GamePlayerClock />
        </GamePlayerHistoryPlayerClock>
      </GamePlayerHistoryDiv>
    );
  }
}

export default PlayerHistory;
