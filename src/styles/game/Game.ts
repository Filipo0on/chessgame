import styled from 'styled-components';

export const GameChatInput = styled.input`
    margin-top: auto;
    padding: 10px;
    border: none;
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
    background: rgba(255,255,255, 0.5);
`;

export const GameNavigationH1 = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8em;
    font-weight: 100;
    margin: 0;
`;
export const GameNavigationH1small = styled.small`
    font-size: 60%;
    font-weight: 100;
    color:#444444;
    margin: 0;
`;

export const GamePlayerHistoryDiv = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GamePlayerHistoryPlayerClock = styled.p`
    height: 12%;
    width: 85%;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 275%;
`;

export const GamePlayerHistoryPlayer = styled.p`
    height: 8%;
    width: 85%;
    margin: 0;
    display: flex;
    align-items: center;
    font-size: x-large;
    padding: 15px;
`;

export const GamePlayerHistory = styled.div`
    min-height: 36%;
    max-height: 36%;
    width: 85%;
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
    overflow-y: auto;
    word-break: break-all;
`;

export const GamePlayerHistoryPlayers = styled.div`
    width: 45%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const GamePlayerHistoryPlayersMove = styled.p`
    margin: 0;
    padding: 4px;
`;

export const GamePlayerHistoryRounds = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    height: 100%;
    width: 100%;
    text-align: center;
`;

export const GamePlayerRound = styled.p`
    margin: 0;
    padding: 4px;
    background-color: gainsboro;
`;