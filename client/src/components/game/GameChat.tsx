// tslint:disable:no-console
import * as React from "react";
import * as moment from "moment";
import styled from "styled-components";
import GameChatHeader from "src/components/game/GameChatHeader";
import QuickMsg from "./QuickMsg";
import { Query } from "react-apollo";
import { GET_MESSAGES } from "../../dist/graphql/queries/game/getMessages";
import { ADD_MESSAGE } from '../../dist/graphql/mutations/game/addMessage';
import { client } from '../../index';

const ChatContainer = styled.div`
  height: 100%;
  max-height: 439px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 10px;
  border: 1px solid gray;
`;
const ChatMessageList = styled.div`
  max-height: 309px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 10px 10px;
  overflow-y: auto;
`;

const ChatEventContainer = styled(ChatContainer)`
  height: 10%;
  margin: auto 0 0 0;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  border: none;
`;

const ChatParagraph = styled.div`
  width: 100%;
  text-align: left;
  &:nth-child(even) {
    text-align: right;
    font-style: italic;
  }
`;

const ChatQuickMsg = styled(ChatContainer)`
  width: 100%;
  height: 7%;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing: border-box;
  margin: 0;
  border: none;
`;

const ChatInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  box-sizing: border-box;
  margin: 0;
`;

class GameChat extends React.Component<any, any> {
  public state = {
    inputValue: "",
    chatMessages: []
  };
  public av: any;
  public componentDidMount() {
    this.scrollToBottom();
  }

  public componentDidUpdate() {
    this.scrollToBottom();
  }

  public scrollToBottom = () => this.av ? this.av.scrollIntoView({ behavior: "smooth" }) : false

  public onSubmitChat = (event: any) => {
    if (event.key === "Enter") {
      console.log('input', this.state.inputValue)
      client.mutate({
          variables: { 
            message: this.state.inputValue, 
            user: "2", 
            gameId: "1", 
            createdAt: moment(new Date()).format("HH:mm:ss DD MMM, YYYY") 
          },
          mutation: ADD_MESSAGE,
          
      })
      .then(result => { console.log('success', result) })
      .catch(error => { console.log(error) });
      // return this.setState((prevState: any) => ({
      //   chatMessages: prevState.chatMessages.concat({
      //     text: this.state.inputValue,
      //     date: new Date()
      //   }),
      //   inputValue: ""
      // }));
    }
  };

  public handleInputValue = (event: any) =>
    this.setState({ inputValue: event.target.value });

  public handleQuickMsg = (text: string) =>
    this.setState((prevState: any) => ({
      chatMessages: prevState.chatMessages.concat({ text, date: new Date() })
    }));

  public render() {
    return (
      <Query query={GET_MESSAGES}>
        {({ loading, error, data }) => {
          if (error) {
            return <>Something went wrong! {error}</>;
          }
          if (loading || !data) {
            return "loading...";
          }

          const messages = data.getMessages;

          const listOfMessages = messages.map((msg: any) => {
            return (
              <ChatParagraph key={msg.id}>
                <span style={{ fontStyle: "italic", fontSize: "0.6em" }}>
                  {moment(msg.createdAt).format("HH:mm:ss DD MMM, YYYY")}
                </span>
                <p style={{ margin: "0" }}>{msg.message}</p>
              </ChatParagraph>
            );
          });
          return (
            <ChatContainer>
              <GameChatHeader title={"Game chat"} />
              <ChatMessageList>
                {listOfMessages}
                <div
                  ref={(av: any) => {
                    this.av = av;
                  }}
                />
              </ChatMessageList>
              <ChatEventContainer>
                <ChatInput
                  placeholder={"Please behave!"}
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleInputValue}
                  onKeyPress={this.onSubmitChat}
                />
              </ChatEventContainer>
              <ChatQuickMsg>
                <QuickMsg
                  text={"Greetings!"}
                  short={"GREETING"}
                  handleQuickMsg={this.handleQuickMsg}
                />
                <QuickMsg
                  text={"Nice job!"}
                  short={"PRAISE"}
                  handleQuickMsg={this.handleQuickMsg}
                />
                <QuickMsg
                  text={"I got you now!"}
                  short={"TAUNT"}
                  handleQuickMsg={this.handleQuickMsg}
                />
                <QuickMsg
                  text={"Check mate!"}
                  short={"GAMEOVER"}
                  handleQuickMsg={this.handleQuickMsg}
                />
              </ChatQuickMsg>
            </ChatContainer>
          );
        }}
      </Query>
    );
  }
}

export default GameChat;
