import * as React from "react";

import GameBoard from "src/components/game/GameBoard";
import GameChat from "src/components/game/GameChat";
import GameInfo from "src/components/game/GameInfo";
import PlayerHistory from "src/components/game/PlayerHistory";

import gameStore from "src/store/GameStore";

import { GameWrapperStyles, GameHistoryStyles, GameNavigationStyles, GameChatStyles } from "../../styles/game/Game";

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
          Navigation | Demo-message:{this.state.message}
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
