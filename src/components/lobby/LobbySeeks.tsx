// tslint:disable:no-console
import * as React from 'react';
import styled from 'styled-components';
import {CreatedGames} from '../../store/MockData';
const Container = styled.div `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
background-color: white;
opacity: 0.8;
height: auto;
width: auto;
overflow-y: scroll;
padding: 50px 40px 0px 40px;
box-shadow: 5px 5px 30px black, -5px -3px 30px black;
  
`
const ListItemMatch = styled.div `
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
border-bottom: 1px solid black;
padding: 20px 15px;
place-items: baseline;
`
const JoinBTN = styled.button `
justify-self: end;
padding: 15px;
color: white;
background-color: green; 
border-radius: 10px;
border: none;
:focus {
  outline-width: 0;
}
`
interface IStateType  {
  Player: string;
}
class LobbySeeksComponent extends React.Component<any, IStateType> {
  constructor (props: any) {
    super(props)
    this.state = {       
      
      Player: "kalle",
    };
}
  public render() {
    console.log("created games",CreatedGames)
    const Games = CreatedGames;
const ListOfGames = Games.map(Game => {
return (

  <ListItemMatch key={Game.gameId}>
    <div>{Game.creator}</div>
     <div>{Game.gameType}</div>
     <div>{Game.gameTime}</div>
     <div>{Game.gameAddTime}</div>
    <JoinBTN>Join</JoinBTN>
  </ListItemMatch>
);
});
   
    return (
      <Container>
        <ListItemMatch style={{fontWeight: "bold", fontSize: 15}}>
    <div>Creator</div>
    <div>Game Type</div>
    <div>Time</div>
    <div>Time Add</div>
  </ListItemMatch>
        {ListOfGames}
      </Container>
    );
  }
}
export default LobbySeeksComponent;