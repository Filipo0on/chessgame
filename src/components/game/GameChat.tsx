import * as React from 'react';
import { GameChatInput } from '../../styles/game/Game';

class GameChatComponent extends React.Component<any, any> {
  public render() {
    return (
      <div>
        GameChatComponent
        <GameChatInput placeholder={"Vänligen uppträd trevligt i chatten"} />
      </div>
    );
  }
}

export default GameChatComponent;
