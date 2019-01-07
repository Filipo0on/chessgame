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
overflow-y: scroll;
padding: 50px 40px 0px 40px;
box-shadow: 5px 5px 30px black, -5px -3px 30px black;
  
`
const ListItemMatch = styled.div `
display: grid;
grid-template-columns: 70% 30%;
border-bottom: 1px solid black;
padding: 20px 15px;
place-items: baseline;

`
const MatchInfo = styled.div`

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
    <MatchInfo>{Game.creator}</MatchInfo>
     {/* <p>{Game.opponent}</p> */}
     
    <JoinBTN>Join</JoinBTN>
  </ListItemMatch>
);
});
    return (
      <Container>        
        {ListOfGames}
      </Container>
    );
  }
}

export default LobbySeeksComponent;