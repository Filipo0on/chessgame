import * as React from "react";

import GameBoard from "src/components/game/GameBoard";
import GameChat from "src/components/game/GameChat";
import GameInfo from "src/components/game/GameInfo";
import PlayerHistory from "src/components/game/PlayerHistory";
import { GameWrapperStyles, 
  GameHistoryStyles, 
  GameNavigationStyles, 
  GameChatStyles, 
  GameNavigationH1, 
  GameNavigationH1small } from "../../styles/game/Game";
import gameStore from "src/store/GameStore";

import '../../components/game/game.css'


class GameComponent extends React.Component<any, any> {
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
    return (
      <GameWrapperStyles>
        <GameNavigationStyles>
          <GameNavigationH1>Navigation | <GameNavigationH1small>Demo-message:{this.state.message}</GameNavigationH1small></GameNavigationH1>
        </GameNavigationStyles>
        <GameChatStyles>
          <GameInfo />
          <GameChat />
        </GameChatStyles>
        <GameBoard />
        <GameHistoryStyles>
          <PlayerHistory />
        </GameHistoryStyles>
      </GameWrapperStyles>
    );
  }
}

export default GameComponent;
