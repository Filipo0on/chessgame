import * as React from 'react';
import { GameChatInput } from '../../styles/game/Game';

class GameChat extends React.Component<any, any> {
  public render() {
    return (
      <>
        <GameChatHeader title={'Chattrum'}/>
        <GameChatInput placeholder={"Vänligen uppträd trevligt i chatten"} />
      <>
    );
  }
}

export default GameChat;
