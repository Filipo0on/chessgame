// tslint:disable:no-console
// tslint:disable:jsx-no-lambda
import * as React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo'
import { GET_GAMES } from '../../dist/graphql/queries/game/getGames';
import { client } from "../../index";
import { Redirect } from "react-router-dom";
import UPDATE_GAME  from "../../dist/graphql/mutations/lobby/updateGame";

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
const ListItemHeader = styled.div `
display: grid;
grid-template-columns: 20% 20% 20% 20% 20%;
border-bottom: 1px solid black;
padding: 20px 15px;
place-items: baseline;
font-weight: bold;
font-size: 15px;
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
    gameList: any;
    redirect: boolean;
    id: any;
}
class LobbySeeksComponent extends React.Component<any, IStateType> {
  constructor (props: any) {
    super(props)
    this.state = { 
      gameList: [], 
      redirect: false,
      id: null     
      
  
    };
  
}
  public handleClick = (gameId: any) => {
    client.mutate({
      variables: {id: gameId, gameStarted: true},
      mutation: UPDATE_GAME
     })
     .then(() => {
       this.setState({
         redirect: true,
         id: gameId

       })
     })
  
};
public setGameListState = (gameData: any):any => {
  if(this.state.gameList !== gameData) {
    this.setState({gameList: gameData})
  }

};
public render() {
  const Games = this.state.gameList;
  if(this.state.redirect){
    console.log('GameId', this.state.id)
    return <Redirect to={"/game/"+this.state.id} />
  }
  const ListOfGames = Games.map((Game: any) => {
return (
  
  <ListItemMatch key={Game.id}>
    <div>{Game.creator}</div>
     <div>{Game.gameType}</div>
     <div>{Game.gameTime}</div>
     <div>{Game.gameAddTime}</div>
    <JoinBTN onClick={()=>  this.handleClick(Game.id)}>Join</JoinBTN>
  </ListItemMatch>
);
});

return (
  <Query query={GET_GAMES} pollInterval={1000}>
    {({ loading, error, data }) => {
      if (error) { return <>Something went wrong! {error}</>; }
      if (loading || !data) { return "loading..."; }
      const games = data.getGames
      this.setGameListState(games);                
      return (
        <Container>
          <ListItemHeader>
      <div>Creator</div>
      <div>Game Type</div>
      <div>Time</div>
      <div>Time Add</div>
      </ListItemHeader>
          {ListOfGames}
        </Container>
      );
    }}
  </Query>
);
  }
}
export default LobbySeeksComponent;

