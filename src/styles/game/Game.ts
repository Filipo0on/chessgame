import styled from 'styled-components'

export const GameWrapperStyles = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: repeat(5, minmax(auto, 1fr));
  grid-gap: 20px;
`;

export const GameNavigationStyles = styled.section`
    grid-row:    1;
    grid-column: span 5;
`;

export const GameBoardStyles = styled.article`
    grid-row:    2;
    grid-column: 3;
`;

export const GameHistoryStyles = styled.article`
    grid-row:    2;
    grid-column: 4;
`;

export const GameChatStyles = styled.article`
    grid-row:    2;
    grid-column: 2;
    display:flex;
    flex-direction:column;
`;