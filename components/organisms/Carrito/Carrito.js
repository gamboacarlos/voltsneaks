import { Text, Image, Button } from '../../atoms';
import { useData } from '../../../contexts/DataProvider';
import { BodyWrapper, CarritoBody, CarritoWrapper, CountWrapper, Item } from './Carrito.elements';


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
                  <Button onClick={() => eliminarProd(prod.id)}>x</Button>
                </BodyWrapper>  
              </Item>
              ))
          }
          </CarritoWrapper>  
    )
}

export default Carrito
