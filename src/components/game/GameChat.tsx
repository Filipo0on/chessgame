// tslint:disable:no-console
import * as React from 'react';
import styled from 'styled-components';
import GameChatHeader from 'src/components/game/GameChatHeader';
import QuickMsg from './QuickMsg'

const ChatContainer = styled.div`
  height:100%;
  max-height: 439px;
  display: flex;
  flex-direction: column;
  
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
  margin-top: auto;
  flex-direction:row;
  justify-content: flex-start;
  box-sizing: border-box;
`;
const ChatParagraph = styled.p`
  width:100%;
  text-align:left;
  &:nth-child(even) {
    text-align:right;
    font-style:italic;
  } 
`;
const ChatQuickMsg = styled(ChatContainer)`
  width:100%;
  height:10%;
  flex-direction:row;
  justify-content: flex-start;
  box-sizing: border-box;
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
`;

class GameChat extends React.Component<any, any> {
  public state = {
    inputValue: '',
    chatMessages: []
  }
  // public av: any;
  // public componentDidMount() {
  //   this.scrollToBottom();
  // }

  // public componentDidUpdate() {
  //   this.scrollToBottom();
  // }

  // public scrollToBottom = () => {
  //   this.av.scrollIntoView({ behavior: 'smooth' });
  // }
  public onSubmitChat = (event: any) => {
    if (event.key === 'Enter') {
      return this.setState((prevState: any) => ({chatMessages: prevState.chatMessages.concat(this.state.inputValue), inputValue: ''}))
    }
  }

  public handleInputValue = (event: any) => this.setState({inputValue: event.target.value})

  public handleQuickMsg = (text: string) => this.setState((prevState: any) => ({chatMessages: prevState.chatMessages.concat(text)}))

  public render() {
    const messages = this.state.chatMessages.map((msg: any, i: any) => {
      return <ChatParagraph key={i}>{msg}</ChatParagraph>
    })
    return (
      <ChatContainer>
        <GameChatHeader title={'Game chat'}/>
        <ChatMessageList>
          {messages}
          {/* <div ref={(av: any) => { this.av = av; }} /> */}
        </ChatMessageList>
        <ChatEventContainer>
          <ChatInput 
            placeholder={"Vänligen uppträd trevligt i chatten"} type="text" 
            value={this.state.inputValue}
            onChange={this.handleInputValue}
            onKeyPress={this.onSubmitChat}
          />
        </ChatEventContainer>
        <ChatQuickMsg>
          <QuickMsg text={"God Morgon!"} handleQuickMsg={this.handleQuickMsg} />
          <QuickMsg text={"Bra match"} handleQuickMsg={this.handleQuickMsg} />
        </ChatQuickMsg>
      </ChatContainer>
    );
  }
}

export default GameChat;
