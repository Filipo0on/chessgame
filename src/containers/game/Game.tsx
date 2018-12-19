import * as React from 'react';

import GameBoardComponent from 'src/components/game/GameBoard';
import GameChatComponent from 'src/components/game/GameChat';
import GameInfoComponent from 'src/components/game/GameInfo';
import PlayerHistoryComponent from 'src/components/game/PlayerHistory';

import gameStore from 'src/store/GameStore';

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
      <div>
        <div>
            <GameChatComponent />
            <GameBoardComponent />
            <GameInfoComponent />
        </div>
        <div>
            <PlayerHistoryComponent />
        </div>
        <p>Demo-message:{this.state.message}</p>
      </div>
    );
  }
}

export default GameComponent;
