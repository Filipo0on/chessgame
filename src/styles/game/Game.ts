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
  grid-template-columns: 100px 1fr 515px 1fr 100px;
  grid-gap: 20px;
  font-family: 'Roboto', sans-serif;
  font-size: 0.99em;
`;

export const GameNavigationStyles = styled.section`
    grid-row:    1;
    grid-column: span 5;
    justify-self: stretch;
    padding: 10px 15px;
    background: rgba(255, 255, 255, 0.8);
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
export const GameChatH3 = styled.h3`
    text-align: center;
    font-size: 1.2em;
    background-color: rgba(255, 255, 255, 0.68);
    padding: 10px;
    margin: 0;
    letter-spacing: 1px;
`;