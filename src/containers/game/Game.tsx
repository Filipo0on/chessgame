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
import getData from "src/components/game/axiosTest";

import "../../components/game/game.css";

// this file should get props, creator, oponent, game id, time stuff from lobby.
// const fakeData = {
//   creator: "feacrapulous",
//   creatorColor: "Black",
//   opponent: "purposefussy",
//   opponentColor: "White",
//   gameId: 1,
//   gameType: "Classic",
//   gameTime: 5,
//   gameAddTime: 15,
//   gameStarted: true
// };
class Game extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      game: []
    };
  }
  public componentDidMount() {
    // tslint:disable:no-console
    getData().then((respons: any) => {
      const filteredGames = respons.filter((game: any) => {
        return game.gameId === 2;
      });
      this.setState({ game: filteredGames });
    });

    gameStore.getSubject().subscribe((st: any) => {
      this.setState(st);
    });
  }
  public render() {
    console.log("state", this.state.game);
    const storedGame = this.state.game;
    const creator = { name: '', piece: ''};
    const opponent = { name: '', piece: ''};
    const game = { time: 0, bonusTime: 0, active: false};
    // THIS DUMB IF DO NOT WORK YET
    if (this.state.game !== []) {
      creator.name = storedGame ? storedGame.creator : ""
      creator.piece =  storedGame ? storedGame.creatorColor : ""
      opponent.name = storedGame ? storedGame.opponent : ""
      opponent.piece = storedGame ? storedGame.opponentColor : ""
      game.time = storedGame ? storedGame.gameTime : 0,
      game.bonusTime = storedGame ? storedGame.gameAddTime : 0,
      game.active = storedGame ? storedGame.gameStarted : false
      console.log(creator, opponent, game);
    }
    // END OF DUMB IF, MAY IT BLOODY WELL REST IN PEACE... NOT
    return (
      <GameWrapperStyles>
        <GameNavigationStyles>
          <GameH1>
            Navigation | <Small>Demo-message :{this.state.message}</Small>
          </GameH1>
        </GameNavigationStyles>
        <GameChatStyles>
          {" "}
          {/* BYT NAMN */}
          <GameInfo creator={creator} opponent={opponent} game={game} />
          <GameChat creator={creator.name} opponent={opponent.name} />
        </GameChatStyles>
        <GameBoard />{" "}
        {/*  Only logig, needs to send data up to parent component ? */}
        <GameHistoryStyles>
          <PlayerHistory />{" "}
          {/*  Needs to get moves data, player data, time data from ongoing game and lobby */}
        </GameHistoryStyles>
      </GameWrapperStyles>
    );
  }
}

export default Game;
