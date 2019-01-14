// tslint:disable:no-console
import {BehaviorSubject} from 'rxjs';

const serverData = {   
   gameList: [ 
    {creator : "Lenart", creatorColor: "",  opponent : "Berit", gameId : 1, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: true, player2Ready: false,},
    {creator : "Stefan", creatorColor: "",  opponent : "Kalle", gameId : 2, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: true,},
    {creator : "Ann-Britt", creatorColor: "",  opponent : "Stina", gameId : 3, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: true, player2Ready: true,},
    {creator : "Gunnbritt", creatorColor: "",  opponent : "Herman", gameId : 4, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
    {creator : "Axel", creatorColor: "",  opponent : "Anna", gameId : 5, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
    {creator : "Anonymous", creatorColor: "",  opponent : "Anonymous", gameId : 6, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
    {creator : "Anonymous", creatorColor: "",  opponent : "Anonymous", gameId : 7, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
    {creator : "Anonymous", creatorColor: "",  opponent : "Anonymous", gameId : 8, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
    {creator : "Anonymous", creatorColor: "",  opponent : "Anonymous", gameId : 9, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
    {creator : "Anonymous", creatorColor: "",  opponent : "Anonymous", gameId : 10, gameType : "Classic", gameTime : 5, gameAddTime : 15, gameStarted : false, player1Ready: false, player2Ready: false,},
  ],
};
const subject = new BehaviorSubject(serverData);
class LobbyStore {
    constructor() {
        this.setState({})            
    }
    public setState(st: any) {
      const val = subject.value;
      const state = Object.assign({}, val, st);
      subject.next(state)
    }
    public getSubject() {
      return subject;
    }
    public updateDemoMessage(payload:any) {
      this.setState(payload)
    }  
  }
export default new LobbyStore();