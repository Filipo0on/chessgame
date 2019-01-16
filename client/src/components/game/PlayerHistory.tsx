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
import { Query } from 'react-apollo';
import { GET_GAMES } from '../../dist/graphql/queries/game/getGames';

class PlayerHistory extends React.Component<any, any> {
  public render() {
    return (
      <Query query={GET_GAMES}>
        {({ loading, error, data }) => {
          if(error) { return <>Error: {error}</>; }
          if(loading || !data) { return "Loading..." }
         
          const game = data.getGame.history
          const whiteMoves = game.filter((move: any) => {
            return move.color === "w"
          })
          const blackMoves = game.filter((move: any) => {
            return move.color === "b"
          })
          let lengthRows = 0;
          const whiteHistoryMoves = whiteMoves.map((move: any, index: any) => {
            lengthRows++
            return (
              <GamePlayerHistoryRounds key={index.toString()}>
                <GamePlayerRound>{lengthRows}</GamePlayerRound>
                <GamePlayerHistoryPlayersMove key={index.toString()}>{move.san}</GamePlayerHistoryPlayersMove>
              </GamePlayerHistoryRounds>
            )
          })
          const blackHistoryMoves = blackMoves.map((move: any, index: any) => {
            return (
              <GamePlayerHistoryPlayersMove key={index.toString()}>{move.san}</GamePlayerHistoryPlayersMove>
            )
          })
          return (
            <GamePlayerHistoryDiv>
            <GamePlayerHistoryPlayerClock>
              <GamePlayerClock />:00
            </GamePlayerHistoryPlayerClock>
            <GamePlayerHistoryPlayer>
              Motståndare
            </GamePlayerHistoryPlayer>
            <GamePlayerHistory>
              <GamePlayerHistoryPlayers>
                {whiteHistoryMoves} 
              </GamePlayerHistoryPlayers> 
              <GamePlayerHistoryPlayers>
                {blackHistoryMoves}
              </GamePlayerHistoryPlayers>
            </GamePlayerHistory>
            <GamePlayerHistoryPlayer>
              Medspelare
            </GamePlayerHistoryPlayer>
            <GamePlayerHistoryPlayerClock>
            <GamePlayerClock />:00
            </GamePlayerHistoryPlayerClock>
          </GamePlayerHistoryDiv>
          )
        }}
      </Query>
    );
  }
}

export default PlayerHistory;
