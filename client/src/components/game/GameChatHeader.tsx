import * as React from 'react';

import { IGameChatHeader} from 'src/components/game/interfacesGame';

class GameChatHeader extends React.Component<IGameChatHeader, any> {

    public render(){
        return(
            <h3>{this.props.title}</h3>
        )
    }
}

export default GameChatHeader


// statless component 

export const HeaderChat: React.SFC<IGameChatHeader> = (props) => (
    <h3>{props.title}</h3>
) 

