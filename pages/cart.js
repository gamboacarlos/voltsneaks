import { Anchor } from 'components/atoms';
import Carrito from 'components/Carrito'
import styled from 'styled-components';


const CartWrapper = styled.div`
  margin: 100px auto;
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
`

const cart = () => {


    return (
     <>
        <CartWrapper>
            <Anchor href="/">Home</Anchor>
            <Carrito/>
        </CartWrapper>
     </>
    )
}

export default cart
