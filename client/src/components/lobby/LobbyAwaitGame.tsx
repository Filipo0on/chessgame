// tslint:disable:no-console
import * as React from 'react';
import styled from 'styled-components';
import BGImage from '../../dist/images/chess-bg.jpg';
import lobbyStore from "src/store/LobbyStore";
import { Redirect } from "react-router-dom";
import { Query } from "react-apollo";
import { GET_GAMES } from "../../dist/graphql/queries/game/getGames";

interface IStateType  { 
  gameId: number; 
  gameList: any; 
  filteredGame: any;
  readyToJoinGame: boolean;
}interface IPropsType {
    match: any;
}
class LobbyAwaitGameComponent extends React.Component<IPropsType, IStateType> {
  constructor (props: IPropsType) {
    super(props)
    this.state = {             
      gameId: this.props.match.params.id,   
      gameList: [],      
      readyToJoinGame: false,
      
      filteredGame: {
          gameType: "classic",
          gameAddTime: 5,
          gameTime: 30,
      }
    }; 
}
public componentDidMount() {
    lobbyStore.getSubject().subscribe((st: any) => {        
        this.setState(st, () => {           
            this.findMatchById();            
        });           
    });
}
public checkIfReadyToJoinMatch = () => {
    if(this.state.filteredGame.gameStarted) {        
        setTimeout(() => { 
            this.setState({readyToJoinGame: true,})
        }, 1500);   
    }
}
public findMatchById = () => {    
   if(this.state.gameList.length !== 0) {
        const findGame = this.state.gameList.find((MatchId: { gameId: number; }) => MatchId.gameId === +this.state.gameId);
        this.setState({filteredGame: findGame});        
    }
}
public render() {  
    if (!this.state.filteredGame ) {
        return null;
    }
    const gameData = this.state.filteredGame;  
    const HeadingText = gameData.gameStarted ? 'Joining Game...' : 'Waiting for opponent'; 
    this.checkIfReadyToJoinMatch();
    if(this.state.readyToJoinGame) {
        return <Redirect to={'/game/'+this.state.gameId} />          
    }  

    return (
        <Query query={GET_GAMES} pollInterval={1000}>
          {({ loading, error, data }) => {
            if (error) { return <>Something went wrong! {error}</>; }
            if (loading || !data) { return "loading..."; }
  
            const games = data.getGames
            const game = data.getGame
            console.log('data', games) // This console log is only here to vew data now, to display how the query works. 
                                      //  It will be removed at a later date.
            console.log('one game', game)
            return (        
                <Container>
                    <Content>
                         <Header>{HeadingText}</Header>                        
                       <MatchInfo>
                            <div>
                                <MatchInfoHeading>Match Info</MatchInfoHeading>
                                <List>
                                    <ListItem><strong>Game Type: </strong>{gameData.gameType}</ListItem>
                                    <ListItem><strong>Game Time: </strong>{gameData.gameTime} min</ListItem>
                                    <ListItem><strong>Game AddTime: </strong>{gameData.gameAddTime} sek</ListItem>
                                </List>
                            </div>                 
                        </MatchInfo>  
                       
                    </Content>
                </Container>
             );
          }}
        </Query>
      );

   } 
}
export default LobbyAwaitGameComponent;

const Container = styled.div `    
    background-image: url(${BGImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-origin: content-box;
    margin: 0; 
    height: 100vh;
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-template-rows: 10% auto 10%;   
`
const Content = styled.div `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: white;
    opacity: 0.8;
    height: 100%;
    max-height: 450px;
    min-width: 1000px;
    justify-self: center;
    box-shadow: 5px 5px 30px black, -5px -3px 30px black;
    display: grid;
    grid-template-columns: 5% 50% 35% 10%;
    grid-template-rows: 80px auto;  
`
const Header = styled.h1 `
    grid-column-start: 1;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: 0 5%;
    padding-top: 30px;
    
    font-weight: bold;
    border-bottom: 2px solid black;
`
const MatchInfo = styled.div `
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: 50px;
    display: flex;
    justify-content: flex-start;
    line-height: 20px;
    font-size: 17px;
`
const MatchInfoHeading = styled.h2`
    margin-top: 0;
`
const List = styled.ul `
   margin: 0;
   list-style: none;
   padding: 0;
`
const ListItem = styled.li `
line-height: 25px;
`
