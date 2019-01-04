// tslint:disable:no-console
import * as React from 'react';
import * as moment from 'moment'
import styled from 'styled-components';
import GameChatHeader from 'src/components/game/GameChatHeader';
import QuickMsg from './QuickMsg'

const ChatContainer = styled.div`
  height:100%;
  max-height: 439px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 10px;
  border: 1px solid gray;
`;
const ChatMessageList = styled.div`
  max-height:309px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding:10px 10px;
  overflow-y: auto;
`;
const ChatEventContainer = styled(ChatContainer)`
  height: 10%;
  margin: auto 0 0 0;
  flex-direction:row;
  justify-content: flex-start;
  box-sizing: border-box;
  border: none;
`;
const ChatParagraph = styled.div`
  width:100%;
  text-align:left;
  &:nth-child(even) {
    text-align:right;
    font-style:italic;
  } 
`;
const ChatQuickMsg = styled(ChatContainer)`
  width:100%;
  height:7%;
  flex-direction:row;
  justify-content: flex-start;
  box-sizing: border-box;
  margin:0;
  border: none;
`;
// const SendMessage = styled.button`
//   width:20%;
//   border: none;
//   background-color: lightgray;
//   padding: 10px 10px;
//   color: black;
//   box-sizing: border-box;
//   font-weight:bold;
//   cursor: pointer;
// `;
const ChatInput = styled.input`
  width:100%;
  padding: 10px;
  border: none;
  box-sizing: border-box;
  margin:0;
`;

class GameChat extends React.Component<any, any> {
  public state = {
    inputValue: '',
    chatMessages: []
  }
  public av: any;
  public componentDidMount() {
    this.scrollToBottom();
  }

  public componentDidUpdate() {
    this.scrollToBottom();
  }

  public scrollToBottom = () => {
    this.av.scrollIntoView({ behavior: 'smooth' });
  }
  public onSubmitChat = (event: any) => {
    if (event.key === 'Enter') {
      return this.setState((prevState: any) => ({chatMessages: prevState.chatMessages.concat({text: this.state.inputValue, date: new Date()}), inputValue: ''}))
    }
  }

  public handleInputValue = (event: any) => this.setState({inputValue: event.target.value})

  public handleQuickMsg = (text: string) => this.setState((prevState: any) => ({chatMessages: prevState.chatMessages.concat({text, date: new Date()})}))

  public render() {
    const messages = this.state.chatMessages.map((msg: any, i: any) => {
      return <ChatParagraph key={i}>
              <span style={{fontStyle: 'italic', fontSize: '0.6em'}}>
                {moment(msg.date).format('hh:mm:ss DD MMM, YYYY')}
              </span>
              <p style={{margin: '0'}}>{msg.text}</p>
            </ChatParagraph>
    })
    return (
      <ChatContainer>
        <GameChatHeader title={'Game chat'}/>
        <ChatMessageList>
          {messages}
          <div ref={(av: any) => { this.av = av; }} />
        </ChatMessageList>
        <ChatEventContainer>
          <ChatInput 
            placeholder={"Please behave!"} type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputValue}
            onKeyPress={this.onSubmitChat}
          />
        </ChatEventContainer>
        <ChatQuickMsg>
          <QuickMsg text={"Greetings!"} short={"GREETING"} handleQuickMsg={this.handleQuickMsg} />
          <QuickMsg text={"Nice job!"} short ={"PRAISE"} handleQuickMsg={this.handleQuickMsg} />
          <QuickMsg text={"I got you now!"} short={"TAUNT"} handleQuickMsg={this.handleQuickMsg} />
          <QuickMsg text={"Check mate!"} short ={"GAMEOVER"} handleQuickMsg={this.handleQuickMsg} />
        </ChatQuickMsg>
      </ChatContainer>
    );
  }
}

export default GameChat;