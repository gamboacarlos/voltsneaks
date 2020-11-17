import styled from 'styled-components';
import { Text, Image, Button } from './atoms';
import { useData } from './DataProvider';


const CarritoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  margin: 30px auto;

  @media screen and (max-width: 990px){
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;

  }
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
    grid-column-gap: 5px;

  }
`
const Item = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  max-width: 100%;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 4px 4px #a8a8a8;
  cursor: pointer;
`
const CarritoBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`
const Eliminar = styled.button`
  color: grey;
  padding: 1px;
  text-align: center;
`
const BodyWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`
export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: 5px;

  a{
    padding: 10px;
    margin: 0;
  }

  p{
    margin: 0 10px;
  }
`;

const Carrito = () => {

  const { carrito, eliminarProd, aumentar, disminuir } = useData()

    return (
          <CarritoWrapper>
          {
              carrito.map((prod) => (
                <Item key={prod.id}>
                <Image src={prod.imagenes[0].url}/>
                <BodyWrapper>
                  <CarritoBody>
                    <Text size="small">{prod.marca.nombre}</Text>    
                    <Text size="xSmall">Precio: {prod.precio}</Text>
                    <CountWrapper>
                      <Button onClick={() => disminuir(prod.id)}>-</Button>
                      <Text size="xSmall">{prod.cantidad}</Text>
                      <Button onClick={() => aumentar(prod.id)}>+</Button>
                    </CountWrapper>
                  </CarritoBody>
                  <Eliminar onClick={() => eliminarProd(prod.id)}>X</Eliminar>
                </BodyWrapper>  
              </Item>
              ))
          }
          </CarritoWrapper>  
    )
}

export default Carrito
