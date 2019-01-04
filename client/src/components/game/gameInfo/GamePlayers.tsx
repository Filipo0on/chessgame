import * as React from "react";
import styled from "styled-components";
import { IGamePlayerProps } from "../interfacesGame";

const PlayerContainer = styled.section`
  display: flex;
  flex-direction:column;
  padding: 0 0 0 10px;
  margin-top:10px;

`;

const Player = styled(PlayerContainer)`
  flex-direction:row;
  align-items:center;
  margin: 0 0 5px 0;
`;

const PlayerColor = styled.div`
  background-color: ${(props: any) => props.color};
  width:6px!important;
  height:6px!important;
  border: 1px solid black;
  border-radius: 50%;
  margin-right: 10px;
`;

const GamePlayers: React.SFC<IGamePlayerProps> = props => {
  return (
    <PlayerContainer>
      <Player>
        <PlayerColor color={props.creator.piece} />
        {props.creator.name}
      </Player>
      <Player>
        <PlayerColor color={props.opponent.piece} />
        {props.opponent.name}
      </Player>
    </PlayerContainer>
  );
};

export default GamePlayers;
