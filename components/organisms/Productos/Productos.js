import { Image, Text } from "../../atoms";
import { BsBag } from "react-icons/bs";
import { useData } from "../../../contexts/DataProvider";
import { BodyWrapper, Card, CardBody, Grid, Span } from "./Productos.elements";


/////////////////////// Component Function ///////////////////////
const ProductosGrid = () => {

  const { productos, agregarProd } = useData()

  return (
        <Grid>
          {productos.map((products) => (
              <Card key={products.id} >
                { products.disponible === false ? <Span>Agotado</Span> : null }
                <Image cover src={products.imagenes[0].url} />
                <BodyWrapper>
                  <CardBody>
                    <Text size="xSmall">{products.marca.nombre}</Text>
                    <Text size="xxSmall">Modelo: {products.modelo}</Text>
                    <Text size="xxSmall">Precio: {products.precio}</Text>
                  </CardBody>
                  <BsBag size="18px" onClick={()=>agregarProd(products)}/>
                </BodyWrapper>
              </Card>
          ))}
        </Grid>
    );
};

export default ProductosGrid;
