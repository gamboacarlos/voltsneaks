import styled from 'styled-components';
import Filtro from './Hook';

const SideWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const BUTTON = {
  margin: "5px",
  maxWidth: "150px"
}



const Side = () => {
    return ( 
        <SideWrapper>
          <button style={BUTTON}>Baloncesto</button>
          <button style={BUTTON}>Casual</button>
          <button style={BUTTON}>Running</button>
        </SideWrapper>
     );
}
 
export default Side;