// tslint:disable:no-console
import * as React from 'react';
import styled from 'styled-components';
import {CreatedGames} from '../../store/MockData';
import { NavLink } from 'react-router-dom';

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
padding: 30px 40px 0px 40px;
box-shadow: 5px 5px 30px black, -5px -3px 30px black;
  
`
const ListItemMatch = styled.div `
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
border-bottom: 1px solid black;
padding: 20px 15px;
place-items: baseline;
&:last-of-type{
  border-bottom: none;
}
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
    this.handleClick.bind(this);
}
// function id from match routar oppoenent till rätt /await/gameID sida
  public handleClick = (gameId: any) => {
    console.log("first", gameId);
    
  //  <Route path={match.url + "/await/"} component={}/> 

};
  public render() {
    console.log("created games",CreatedGames)
    const Games = CreatedGames;
const ListOfGames = Games.map((Game: any) => {
  console.log("second", Game);
return (
  
  <ListItemMatch key={Game.gameId}>
    <div>{Game.creator}</div>
     <div>{Game.gameType}</div>
     <div>{Game.gameTime}</div>
     <div>{Game.gameAddTime}</div>
     <NavLink to={"/await/"+Game.gameId}>
    <JoinBTN onClick={this.handleClick.bind(this, Game.gameId)}>Join</JoinBTN>
    </NavLink>
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