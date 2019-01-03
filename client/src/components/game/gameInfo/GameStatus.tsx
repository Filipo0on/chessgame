import * as React from "react";
import styled from "styled-components";

const CurrentStatusStyle = styled.div`
  justify-self: stretch;
  padding: 10px;
  text-align: center;
  font-style: italic;
  font-size: 0.8em;
  border-left: 3px solid ${(props: any) => (props.color ? "#0f8224" : "red")};
`;

export interface IProps {
  active: boolean;
}

const GameStatus: React.SFC<IProps> = props => {
  const borderColor = props.active ? "#0f8224" : "red";
  const gameStatus = props.active ? "Ongoing game" : "Game ended";

  return (
    <CurrentStatusStyle color={borderColor}>{gameStatus}</CurrentStatusStyle>
  );
};

export default GameStatus;
