import styled from 'styled-components';
import { IProps } from 'src/components/game/gameInfo/GameStatus';

export const GameChatInput = styled.input`
    border-radius: 3px;
    margin-top: auto;
`;

export const GameStyleDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export const GameWrapperStyles = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  grid-gap: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.99em;
`;

export const GameNavigationStyles = styled.section`
    grid-row:    1;
    grid-column: span 5;
    justify-self: stretch;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.5);
`;

export const GameBoardStyles = styled.article`
    grid-row:    2;
    grid-column: 3;
`;

export const GameHistoryStyles = styled.article`
    grid-row:    2;
    grid-column: 4;
    background: rgba(255, 255, 255, 0.5);
`;

export const GameChatStyles = styled.article`
    grid-row:    2;
    grid-column: 2;
    display:flex;
    flex-direction:column;
    background: rgba(255,255,255, 0.8);
`;

export const GameH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8em;
    font-weight: 100;
    margin: 0;
`;
export const Small = styled.small`
    font-size: 60%;
    font-weight: 100;
    color:#444444;
    margin: 0;
`;
export const InfoStyles = styled.article`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

export const CurrentStatusStyle = styled.div`
    justify-self:stretch;
    padding:10px;
    text-align: center;
    font-style:italic;
    font-size: 0.8em;
    border-left: 3px solid ${(props: IProps) => props.status === 'ACTIVE' ? "green" : "red"};
`;