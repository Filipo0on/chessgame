import * as React from 'react';
import styled from 'styled-components';




const Container = styled.div `
grid-column-start: 2;
grid-column-end: 3;
grid-row-start: 2;
grid-row-end: 3;
background-color: white;
border-radius: 10px;
opacity: 0.85;
padding: 20px;


display: grid;
grid-template-columns: 80% 10% 10%;



`

class LobbySeeksComponent extends React.Component<any, any> {
  public render() {
    return (
      <Container>
       <div>Hejsan</div>
       <div>Hejsan2</div>
       <div>Hejsan3</div>

      </Container>
    );
  }
}

export default LobbySeeksComponent;