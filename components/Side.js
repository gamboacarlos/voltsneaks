import styled from 'styled-components';

const SideWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`


const Side = () => {
    return ( 
        <SideWrapper>
            <p>Basket</p>
        </SideWrapper>
     );
}
 
export default Side;