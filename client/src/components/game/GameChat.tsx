import * as React from 'react';
import GameChatHeader from 'src/components/game/GameChatHeader';
import { GameChatInput , GameStyleDiv } from '../../styles/game/Game';

class GameChat extends React.Component<any, any> {
  public render() {
    return (
      <GameStyleDiv>
        <GameChatHeader title={'Game chat'}/>
        <GameChatInput placeholder={"Vänligen uppträd trevligt i chatten"} type="text" />
      </GameStyleDiv>
    );
  }
}

export default GameChat;
