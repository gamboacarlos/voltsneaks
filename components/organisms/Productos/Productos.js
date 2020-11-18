import { Image, Text } from "../../atoms";
import { BsTagFill } from "react-icons/bs";
import { useData } from "../../../contexts/DataProvider";
import { BodyWrapper, Card, CardBody, Grid, Span } from "./Productos.elements";


/////////////////////// Component Function ///////////////////////
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
