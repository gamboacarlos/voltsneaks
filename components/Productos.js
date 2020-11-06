import styled from "styled-components";
import { Image, Text } from "./atoms";
import { BsTagFill } from "react-icons/bs";

const CardsContainer = styled.div`
  width: auto;
  display: flex;
  align-items: left;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 50%;
  /* margin: 0 auto; */
  display: flex;
`;
// const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 0 0 25%;
//   max-width: 25%;
//   padding-left: 12px;
//   padding-right: 12px;
//   box-sizing: border-box;
// `;

const Card = styled.div`
  display: flex;
  align-items: left;
  flex-wrap: wrap;
  flex-direction: column;
  
  box-sizing: border-box;
  flex: 1 1 25%;
  max-width: 25%;
  padding: 1rem;
  margin: 1rem;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 4px 4px #a8a8a8;
  cursor: pointer;
  transition: border 200ms ease-in, box-shadow 200ms ease-in;

  &:hover{
      border: 1px solid yellow;
      box-shadow: 6px 6px yellow;      
    }
`;
const BodyWrapper = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
`

const CardBody = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1 1 auto;
  box-sizing: border-box;

  p:first-child {
    margin: 0.7rem 0;
  }
`;


const Productos = (data, basquet) => {
  const ProductCard = () => {
    return (
        <Container>
        <CardsContainer>
          {data.map((products) => (
              <Card key={products.id}>
                <Image src={products.imagenes[0].url} />
                <BodyWrapper>
                  <CardBody>
                    <Text size="xSmall">{products.marca.nombre}</Text>
                    <Text size="xxSmall">Modelo: {products.modelo}</Text>
                    <Text size="xxSmall">Precio: {products.precio}</Text>
                  </CardBody>
                  <BsTagFill className="icon"/>
                </BodyWrapper>
              </Card>
          ))}
        </CardsContainer>
        </Container>
    );
  };
  return {
    ProductCard,
  };
};

export default Productos;
