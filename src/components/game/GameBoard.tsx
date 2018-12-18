import * as React from 'react';

// import { Chessground } from 'chessground' denna importen ska flyttas till fil som gör en react component
import 'react-chessground/dist/styles/chessground.css'

class GameBoardComponent extends React.Component<any, any> {
  public onComponentDidMount() {
      // something
  }
  public render() {
    return (
      <div>
        GameBoardComponent
        {/* <Chessground /> */}
      </div>
    );
  }
}

export default GameBoardComponent;
