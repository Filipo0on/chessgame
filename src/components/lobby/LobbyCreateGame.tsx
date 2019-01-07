import * as React from 'react';
import styled from 'styled-components';
import SelectBase from 'react-select';
// import { getOptionValue } from 'react-select/lib/builtins';


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
// const CreateForm = styled.form`
// width: 100%;
// height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: space-between;
// align-items: center;
// flex-wrap: wrap;
// padding: 20px 0;
// `
let gameType = "Classic"; 
let gameTime= 2; 
let addedTime = 5;
let creatorPiece = "White"; 
let opponentPiece = "Black"; 
const creatorId= 5;

// tslint:disable-next-line:prefer-const
let gameValue = {gameType, gameTime, addedTime, creatorPiece, opponentPiece, creatorId};
interface IState {
  popup:boolean,
  gameValues: {gameType: string, gameTime: number, addedTime: number, creatorPiece: string, opponentPiece: string, creatorId: number}
}
/*interface IMethod{
  togglePopup(state: boolean):void
}*/

class LobbyCreateGameComponent extends React.Component<any, IState> {
  public state = {
    popup: false,
    gameValues: {gameType: "Classic", gameTime: 2, addedTime: 5, creatorPiece: "White", opponentPiece: "black", creatorId: 1}
  }
  public handleChange(data:any) {
    // tslint:disable:no-console
    if(data.type === "gameType") {
      gameType = data.value
    }
    if(data.type === "gameTime") {
      gameTime = data.value
    }
    if(data.type === "addedTime") {
      addedTime = data.value
    }
    if(data.type === "userColor"){
      if (data.value === "Random") {
        const colors = [
          "Black",
          "White"
        ]
        const randomColor = Math.floor(Math.random()*colors.length);
        creatorPiece = colors[randomColor];
        console.log(creatorPiece);
        if (creatorPiece === "White") {
          opponentPiece = "Black";
        }
        else {
          opponentPiece = "White";
        }
      }
      else {
      creatorPiece = data.value;
      if (creatorPiece === "White") {
        opponentPiece = "Black";
      }
      else {
        opponentPiece = "White";
      }
    }
    // gameValue = {gameType: data, gameTime: data, addedTime: data, creatorPiece: "", opponentPiece: "", creatorId: data}
  }
  gameValue = {gameType, gameTime, addedTime, creatorPiece, opponentPiece, creatorId};
}
  /* public createGame(){
    // tslint:disable:no-console
    
    console.log(gameValue);
    
  } */

  public render() {
    const gameTypes = [
      { value : 'Classic', label: 'Classic', type:'gameType' }
    ];
    const gameTimes = [
      { value: 2, label:'2 minutes', type:'gameTime' },
      { value: 3, label:'3 minutes', type:'gameTime' },
      { value: 5, label:'5 minutes', type:'gameTime' },
      { value: 10, label:'10 minutes', type:'gameTime' }
    ];
    const addedTimes = [
      { value: 5, label:'5 seconds', type:'addedTime' },
      { value: 8, label:'8 seconds', type:'addedTime' },
      { value: 15, label:'15 seconds', type:'addedTime' },
      { value: 25, label:'25 seconds', type:'addedTime' }
    ];
    const userColors = [
      { value: 'White', label:'White', type:'userColor' },
      { value: 'Black', label:'Black', type:'userColor' },
      { value: 'Random', label:'Random', type:'userColor' }
    ];

  //   const customStyle = { option: (provided:any, state:any) => ({
  //     ...provided,
  //     width:'100%' 
  //   })
  // }
    
  // const varianble1: string = this.props.phrase
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
          <SelectBase className='react-select-container' classNamePrefix='react-select' onChange={this.handleChange} name="gameType" defaultValue={{value:"Classic", label:"Classic", type:"gameType"}} options={gameTypes} />
          </Row>
          <Row>
          <p>Minutes per player</p>
          <SelectBase className='react-select-container' classNamePrefix='react-select' onChange={this.handleChange} name="gameTime" defaultValue={{value:2, label:"2 minutes", type:"gameTime"}} options={gameTimes} />
          </Row>
          <Row>
          <p>Added seconds</p>
          <SelectBase className='react-select-container' classNamePrefix='react-select' onChange={this.handleChange} name="addedTime" defaultValue={{value:5, label:"5 seconds", type:"addedTime"}} options={addedTimes} />
          </Row>
          <Row>
          <p>My color</p>
          <SelectBase className='react-select-container' classNamePrefix='react-select' onChange={this.handleChange} name="userColor" defaultValue={{value:"White", label:"White", type:"userColor"}} options={userColors} />
          </Row>
          </GameInfo>
          <Footer>
          <button onClick={this.createGame}>Create</button>
          </Footer>
        </PopupCreateGame>
      </Container>
    );
  }
  private togglePopup = () => this.setState( (prevState: IState) => ({popup : !prevState.popup}) );
  private createGame = () => this.setState({gameValues: {gameType: gameValue.gameType, gameTime: gameValue.gameTime, addedTime: gameValue.addedTime, creatorPiece: gameValue.creatorPiece, opponentPiece: gameValue.opponentPiece, creatorId: gameValue.creatorId}}, () => console.log(this.state));
}

export default LobbyCreateGameComponent;
