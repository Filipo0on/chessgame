// tslint:disable:no-console
import * as React from 'react';
import styled from 'styled-components';
import BGImage from '../../dist/images/chess-bg.jpg';

 import {CreatedGames} from '../../store/MockData';


interface IStateType  {
  Player: string;
}

class LobbyAwaitGameComponent extends React.Component<any, IStateType> {

  constructor (props: any) {
    super(props)
    this.state = {       
      
      Player: "kalle",

    };
}
  public render() {
    const ServerData = CreatedGames;
    // const GameId = 2;
    const GameData = ServerData.find(MatchId => MatchId.gameId === 1);



console.log('GameData', GameData);


    



    return (
        
        <Container>
            <Content>
                 <Header>
                  Waiting for players
                  </Header>
                <Players>

                   <Player>
                       <PlayerName>{GameData.creator}</PlayerName>
                       <PlayerReadyButton>Ready</PlayerReadyButton>
                   </Player>
                   <Player>
                       <PlayerName>{GameData.opponent}</PlayerName>
                       <PlayerReadyButton>Ready</PlayerReadyButton>
                   </Player>
                    
                </Players>   

                <MatchInfo>
                    <h2>Match Info</h2>
                    <List>
                        <ListItem>Game Type: {GameData.gameType}</ListItem>
                        <ListItem>Game Time: {GameData.gameTime} min</ListItem>
                        <ListItem>Game Addtime: {GameData.gameAddTime} sek</ListItem>
                    </List>
                </MatchInfo>  

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
grid-template-columns: 10% auto 10% auto 10%;
grid-template-rows: 80px auto 10%;
  
`
const Header = styled.div `
grid-column-start: 1;
grid-column-end: 6;
grid-row-start: 1;
grid-row-end: 2;
margin: 0 5%;
padding-top: 30px;

font-size: 20px;
border-bottom: 2px solid black;

`

const Players = styled.div `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
margin-top: 20px1
`

const Player = styled.div `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
margin-top: 20px
display: grid;
grid-template-colums: 50% 50%;
grid-template-rows: 80px;
`
const PlayerName = styled.p `
grid-column-start: 1;
grid column-end: 2;

`
const PlayerReadyButton = styled.button `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 1;
grid-row-end: 2;
width: 50px;
height: 30px;
`
const MatchInfo = styled.div `

grid-column-start: 4;
grid-column-end: 5;
grid-row-start: 2;
grid-row-end: 3;
text-align: center;
margin-top: 20px;

`
const List = styled.ul `

`
const ListItem = styled.li `

`
