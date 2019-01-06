// tslint:disable:no-console
import * as React from 'react';
import styled from 'styled-components';
import BGImage from '../../dist/images/chess-bg.jpg';
import {CreatedGames} from '../../store/MockData';
const ServerData = CreatedGames;
const mockGame = {creator : "Anonymous", creatorColor: "",  opponent : "Anonymous", gameId : 2, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,}; 
interface IGameData {
    creator: string
    creatorColor: string
    gameAddTime: number
    gameId: number
    gameStarted: boolean
    gameTime: number
    gameType: string | undefined
    opponent: string
    player1Ready: boolean
    player2Ready: boolean
    }
interface IStateType  {
  Player1Ready: boolean;
  Player2Ready: boolean;
  IsPlayer1: boolean;
  gameId: number; 
}
interface IPropsType {
    match: any;
}
class LobbyAwaitGameComponent extends React.Component<IPropsType, IStateType> {
  constructor (props: IPropsType) {
    super(props)
    this.state = {             
      gameId: this.props.match.params.id,     
      IsPlayer1: true,
      Player1Ready: false,
      Player2Ready: false,
    }; 
}
public SetReadyPlayer1 = (gameData : IGameData) => {
    this.setState({Player1Ready: true});
}
public SetReadyPlayer2 = (gameData : IGameData) => {
    this.setState({Player2Ready: true});
}
public MakeReady = () => {
   if(this.state.IsPlayer1) {
       console.log('Change player 1 to ready in DB');
   }else {
       console.log('Change player 2 to ready in DB');
   }
}
public FindMatchById = () => {
    const findGame = ServerData.find(MatchId => MatchId.gameId === +this.state.gameId);
    if(findGame) {
        return findGame;
    }else {
      return mockGame
    }
}
public render() {  
    const gameData = this.FindMatchById();
    const Player1ReadyColor = this.state.Player1Ready ? "green" : "red";
    const Player2ReadyColor = this.state.Player2Ready ? "green" : "red";
    const player1Text = this.state.Player1Ready ? "Ready" : "Not Ready";
    const player2Text = this.state.Player2Ready ? "Ready" : "Not Ready";
    const readyBtnColor = this.state.IsPlayer1 ? Player1ReadyColor : Player2ReadyColor;
    const readyBtnText = this.state.IsPlayer1 ? player1Text : player2Text;   
    
    if (gameData.player1Ready === true && this.state.Player1Ready !== true) {        
         this.SetReadyPlayer1(gameData);
     };

    if (gameData.player2Ready === true && this.state.Player2Ready !== true) {        
        this.SetReadyPlayer2(gameData);
     };
    return (        
        <Container>
            <Content>
                 <Header>
                  Waiting for players
                  </Header>
                <Players>
                   <Player>
                       <PlayerName>{gameData.creator}</PlayerName>
                       <PlayerReadyButton style={{backgroundColor: Player1ReadyColor,}}>{player1Text}</PlayerReadyButton>
                   </Player>
                   <Player>
                       <PlayerName>{gameData.opponent}</PlayerName>
                       <PlayerReadyButton style={{backgroundColor: Player2ReadyColor,}}>{player2Text}</PlayerReadyButton>
                   </Player>                    
                </Players>   

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
               <ReadyBtn onClick={this.MakeReady} style={{backgroundColor: readyBtnColor,}}>{readyBtnText}</ReadyBtn>
            </Content>
        </Container>
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
height: 100Vh;
display: grid;
grid-template-columns: 10% auto 10%;
grid-template-rows: 120px auto 120px;   
`
const Content = styled.div `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
background-color: white;
opacity: 0.8;
height: 650px;
box-shadow: 5px 5px 30px black, -5px -3px 30px black;
display: grid;
grid-template-columns: 5% 50% 35% 10%;
grid-template-rows: 80px auto 150px;  
`
const Header = styled.div `
grid-column-start: 1;
grid-column-end: 6;
grid-row-start: 1;
grid-row-end: 2;
margin: 0 5%;
padding-top: 30px;
font-size: 20px;
font-weight: bold;
border-bottom: 2px solid black;
`
const Players = styled.div `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
margin-top: 50px;
`
const Player = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
`
const PlayerName = styled.p `
font-size: 20px;
font-weight: bold;
`
const PlayerReadyButton = styled.button `
      padding: 12px;
      color: white;
      border-radius: 10px;
      border: none;     
      :focus {
        outline-width: 0;
      }   
      
      `

const MatchInfo = styled.div `
grid-column-start: 3;
grid-column-end: 4;
grid-row-start: 2;
grid-row-end: 3;
margin-top: 50px;
display: flex;
justify-content: flex-end;
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
const ListItem = styled.li ``
const ReadyBtn= styled.button `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 3;
grid-row-end: 4;
height: 100px;
width: 200px;
font-size: 30px;
font-weight: bold;
border: none;
border-radius: 10px;
color: white;
cursor: pointer;
:focus {
    outline-width: 0;
  }  

`