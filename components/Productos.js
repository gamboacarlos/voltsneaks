import { useEffect } from 'react';
import styled from 'styled-components';
import { Image, Text } from './atoms';

const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
`
const Column = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row;
    width: 100%;
    justify-content: start;
    margin: 20px auto;
`
const CardWrapper = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
    border: 1px solid #eee;
    border-radius: 3px;
    box-shadow: 1px 1px 5px #d1d1d1;
    width: 25%;

    img{
        max-height: 200px;
        width: auto;
    }
`
const Info = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const Productos = (data) => {


    const ProductCard = () => {
        return ( 
            <Container>
                <Column>
                {
                    data.map((products) => (
                        <CardWrapper key={products.id}>
                            <Image src={products.image[0].url}/>
                            <Info>
                            <Text>Nombre: {products.nombre}</Text>
                            <Text size="small">Marca: {products.marca}</Text>
                            <Text size="small">Precio: {products.precio}</Text>
                            </Info>
                        </CardWrapper>
                    ))
                }
                
                </Column>
            </Container>
         );
    }
    return {
        ProductCard
    }
}
 
export default Productos;