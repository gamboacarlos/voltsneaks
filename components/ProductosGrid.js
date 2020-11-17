import styled from "styled-components";
import { Image, Text } from "./atoms";
import { BsTagFill } from "react-icons/bs";
import { useData } from "./DataProvider";


const Grid = styled.div`
  width: 50%;
  display: grid;
  grid-auto-columns: 1fr;
  grid-row-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;

    @media screen and (max-width: 1400px){
      grid-row-gap: 20px;
      grid-template-columns: 1fr 1fr;
      grid-column-gap: 10px;
    }
    @media screen and (max-width: 990px){
      grid-row-gap: 10px;
      grid-column-gap: 5px;
    }
    @media screen and (max-width: 750px){
      grid-template-columns: 1fr;
      grid-column-gap: 5px;
    }
`;

const Card = styled.div`
  position: relative;

  display: flex;
  align-items: left;
  flex-wrap: wrap;
  flex-direction: column;
  
  box-sizing: border-box;
  flex: 1 1 25%;
  /* max-width: 25%; */
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: 4px 4px #a8a8a8;
  cursor: pointer;
  transition: border 200ms ease-in, box-shadow 200ms ease-in;

  &:hover{
      border: 1px solid ${props => props.theme.colors.yellow};
      box-shadow: 6px 6px ${props => props.theme.colors.yellow};      
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
const Span = styled.span`
  position: absolute;
  top: 16px;
  left: 17px;
  color: white;
  background-color: tomato;
  padding: 5px;
  z-index: 10;
  border-radius: 4px;
`

const ProductosGrid = () => {

  const { productos, agregarProd } = useData()

  return (
        <Grid>
          {productos.map((products) => (
              <Card key={products.id} onClick={()=>agregarProd(products)}>
                { products.disponible === false ? <Span>Agotado</Span> : null }
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
        </Grid>
    );
};

export default ProductosGrid;
