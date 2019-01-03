// tslint:disable:jsx-no-lambda
import * as React from "react";
import styled from "styled-components";

const QuickMsgStyle = styled.div`
  width: 25%;
  padding: 5px 5px;
  background-color:grey;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  cursor: pointer;
  font-size:0.7em;
`;

export interface IProps {
  text: string,
  short: string,
  handleQuickMsg(text: any): any
}

const GameStatus: React.SFC<IProps> = props => {
  return (
    <QuickMsgStyle onClick={() => props.handleQuickMsg(props.text)}>{props.short}</QuickMsgStyle>
  );
};

export default GameStatus;
