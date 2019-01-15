import * as React from "react";
import GameBoard from "src/components/game/GameBoard";
import GameChat from "src/components/game/GameChat";
import GameInfo from "src/components/game/GameInfo";
import PlayerHistory from "src/components/game/PlayerHistory";
import {
  GameWrapperStyles,
  GameHistoryStyles,
  GameNavigationStyles,
  GameChatStyles,
  GameH1,
  Small
} from "../../styles/game/Game";
import gameStore from "src/store/GameStore";
import "../../components/game/game.css";

// this file should get props, creator, oponent, game id, time stuff from lobby.
const fakeGame = {
  creator: "feacrapulous",
  creatorColor: "Black",
  opponent: "purposefussy",
  opponentColor: "White",
  gameId: 1,
  gameType: "Classic",
  gameTime: 5,
  gameAddTime: 15,
  gameStarted: true
};
class Game extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  public componentDidMount() {
    gameStore.getSubject().subscribe((st: any) => {
      this.setState(st);
    });
  }
  public render() {
    const creator = { name: fakeGame.creator, piece: fakeGame.creatorColor };
    const opponent = { name: fakeGame.opponent, piece: fakeGame.opponentColor };
    const game = {
      time: fakeGame.gameTime,
      bonusTime: fakeGame.gameAddTime,
      active: fakeGame.gameStarted
    };
    return (
      <GameWrapperStyles>
        <GameNavigationStyles>
          <GameH1>
            Navigation | <Small>Demo-message:{this.state.message}</Small>
          </GameH1>
        </GameNavigationStyles>
        <GameChatStyles>
          <GameInfo creator={creator} opponent={opponent} game={game} />
          <GameChat creator={creator.name} opponent={opponent.name}/>
        </GameChatStyles>
        <GameBoard /> {/*  Only logig, needs to send data up to parent component ? */}
        <GameHistoryStyles>
          <PlayerHistory /> {/*  Needs to get moves data, player data, time data from ongoing game and lobby */}
        </GameHistoryStyles>
      </GameWrapperStyles>
    );
  }
}

export default Game;
