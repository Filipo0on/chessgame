import * as React from 'react';

import { IGameChatHeader} from 'src/components/game/interfacesGame';
import { GameChatH3 } from 'src/styles/game/Game'

class GameChatHeader extends React.Component<IGameChatHeader, any> {
    public render(){
        return(
            <GameChatH3>
             {this.props.title}
            </GameChatH3>
        )
    }
}

export default GameChatHeader


// statless component 

export const HeaderChat: React.SFC<IGameChatHeader> = (props) => (
    <h3>{props.title}</h3>
) 

