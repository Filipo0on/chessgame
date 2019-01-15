// tslint:disable:no-console
// tslint:disable:prefer-const
// tslint:disable:jsx-no-lambda
import * as React from 'react';
import styled from 'styled-components';
import SelectBase from 'react-select';
import { ADD_GAME } from "../../dist/graphql/mutations/lobby/addGames";
import { client } from '../../index';

const Container = styled.div`
grid-column-start: 1;
grid-column-end: 2;
grid-row-start: 2;
grid-row-end: 3;
`
const HeaderText = styled.h3`
color: whitesmoke;
`
const ButtonCreateGame = styled.button`
background-color: green;
color: whitesmoke;
`
const PopupCreateGame = styled.div`
z-index: 5;
position: absolute;
top: 30%;
right: 35%
left: 35%;
bottom: 30%;
background-color: whitesmoke;
color: black;
box-shadow: 10px 10px 75px 16px rgba(0,0,0,0.5);
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
`
const Row = styled.div`
box-sizing: border-box;
color: #505050;
display: flex;
flex:1;
flex-direction: row;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
width: 100%;
padding: 0 5%;
`
const Header = styled.div`
background-color: transparent;
box-sizing: border-box;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
width: 100%;
padding: 0 5%;
`
const Footer = styled.div`
background-color: transparent;
box-sizing: border-box;
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
flex-wrap: wrap;
width: 100%;
padding: 0 5%;
`
const GameInfo = styled.div`
width: 100%;
height: auto;
background-color: rgb(0,0,0, 0.1);
`

let gameValue = {
  gameType: "Classic",
  gameTime: 120, 
  gameAddTime: 5, 
  gameStarted: false
};
interface IState {
  popup:boolean,
}

class LobbyCreateGameComponent extends React.Component<any, IState> {
  public state = {
    popup: false,
  }

  public handleChange(data:any) {
    if(data.type === "gameType") {
      gameValue.gameType = data.value
    }
    if(data.type === "gameTime") {
      gameValue.gameTime = data.value;
    }
    if(data.type === "gameAddTime") {
      gameValue.gameAddTime = data.value
    }
  }

  public createGame = () => {
    client.mutate({
      variables: {
        gameType: gameValue.gameType, 
        gameTime: gameValue.gameTime, 
        gameAddTime: gameValue.gameAddTime,
        gameStarted: gameValue.gameStarted
      },
      mutation: ADD_GAME
    })
    .then(result => {console.log('success', result)})
    .catch(error => {console.log('error', error)})
  }

  public render() {
    const gameTypes = [
      { value : 'Classic', label: 'Classic', type:'gameType' }
    ];

    const gameTimes = [
      { value: 120, label:'2 minutes', type:'gameTime' },
      { value: 180, label:'3 minutes', type:'gameTime' },
      { value: 300, label:'5 minutes', type:'gameTime' },
      { value: 600, label:'10 minutes', type:'gameTime' }
    ];

    const gameAddTimes = [
      { value: 5, label:'5 seconds', type:'gameAddTime' },
      { value: 8, label:'8 seconds', type:'gameAddTime' },
      { value: 15, label:'15 seconds', type:'gameAddTime' },
      { value: 25, label:'25 seconds', type:'gameAddTime' }
    ];

    return (
        <Container>
        <HeaderText>AVAILABLE GAMES</HeaderText>
        <ButtonCreateGame onClick={this.togglePopup}>Create game</ButtonCreateGame>
        <PopupCreateGame style={ this.state.popup === true ? {"display":"flex"} : {"display":"none"} }>
          <Header>
          <h3>Create game</h3>
          </Header>
          <GameInfo>
          <Row>
          <p>Type of game</p>
          <SelectBase 
            className='react-select-container' 
            classNamePrefix='react-select' 
            onChange={this.handleChange} 
            name="gameType" 
            defaultValue={{value:"Classic", label:"Classic", type:"gameType"}} 
            options={gameTypes} />
          </Row>
          <Row>
          <p>Minutes per player</p>
          <SelectBase 
            className='react-select-container' 
            classNamePrefix='react-select' 
            onChange={this.handleChange} 
            name="gameTime" 
            defaultValue={{value:2, label:"2 minutes", type:"gameTime"}} 
            options={gameTimes} />
          </Row>
          <Row>
          <p>Added seconds</p>
          <SelectBase 
            className='react-select-container' 
            classNamePrefix='react-select' 
            onChange={this.handleChange} 
            name="gameAddTime" 
            defaultValue={{value:5, label:"5 seconds", type:"gameAddTime"}} 
            options={gameAddTimes} />
          </Row>
          </GameInfo>
          <Footer>
            <button onClick={this.createGame}>Submit</button>
          </Footer>
        </PopupCreateGame>
      </Container>
      
    );
  }
  private togglePopup = () =>  this.setState( (prevState: IState) => ({popup : !prevState.popup}) );
}

export default LobbyCreateGameComponent;

{/*       <Row>
          <p>My color</p>
          <SelectBase className='react-select-container' classNamePrefix='react-select' onChange={this.handleChange} name="userColor" defaultValue={{value:"White", label:"White", type:"userColor"}} options={userColors} />
          </Row> */}
