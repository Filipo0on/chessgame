import * as React from 'react';
import { CurrentStatusStyle } from 'src/styles/game/Game';
// import styled from 'styled-components';

export interface IProps {
    status: 'ACTIVE' | 'DRAW' | 'CLOSED'
}

// const CurrentStatusStyle = styled.div`
//     justify-self:stretch;
//     padding:10px;
//     text-align: center;
//     font-style:italic;
//     font-size: 0.8em;
//     border-left: 3px solid ${(props: IProps) => props.status === 'ACTIVE' ? "green" : "red" };
// `;

const GameStatus: React.SFC<IProps> = (props) => (
    <CurrentStatusStyle status={props.status}>{props.status}</CurrentStatusStyle>
)

export default GameStatus