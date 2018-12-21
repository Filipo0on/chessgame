import * as React from 'react';
import LobbyCreateGameComponent from 'src/components/lobby/LobbyCreateGame';
import LobbyFilterComponent from 'src/components/lobby/LobbyFilter';
import LobbySeeksComponent from 'src/components/lobby/LobbySeeks';
import styled from 'styled-components';
import BGImage from '../../dist/images/chess-bg.jpg';


const MainContainer = styled.div`  

  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-origin: content-box;
  margin: 0; 
  height: 100Vh;
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: 120px auto 120px; 
` 
class Lobby extends React.Component<any, any> {
  public render() {
    return (
        <MainContainer>

          <LobbyFilterComponent />
          <LobbyCreateGameComponent />
          <LobbySeeksComponent />
    
        </MainContainer>
    );
  }
}

export default Lobby;
