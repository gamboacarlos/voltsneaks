import { useEffect } from 'react';
import styled from 'styled-components';
import { useData } from './DataProvider';
import { Selector } from './molecules';

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

  const { setProductos, data, productos, checked, setChecked } = useData()



  const filtro = (categoria) => {

    let baloncesto = productos.filter((prod) => prod.categorias[0].nombre === "Basquetball")
    let casual = productos.filter((prod) => prod.categorias[0].nombre === "Casual")
    let running = productos.filter((prod) => prod.categorias[0].nombre === "Running")
    let hombre = productos.filter((prod) => prod.categorias[1].nombre === "Hombre")


    switch(categoria){
      case "baloncesto":
        return newChecked.push(baloncesto)
      case "casual":
        return setProductos(casual)
      case "running":
        return setProductos(running)
      case "hombre":
        return setProductos(hombre)
      case "reset":
        return setProductos(data)
    }
  }
  /////////////////////////////////////////////////

  const baloncesto = data.filter((prod) => prod.categorias[0].nombre === "Basquetball")
  const casual = data.filter((prod) => prod.categorias[0].nombre === "Casual")
  const running = data.filter((prod) => prod.categorias[0].nombre === "Running")
  const hombre = data.filter((prod) => prod.categorias[1].nombre === "Hombre")

  const handleToggle = (value) => {

    const currentIndex = productos.indexOf(...value)
    const newChecked = [...productos]

    if(currentIndex === -1){
      newChecked.push(...value)
    }else{
      newChecked.splice(currentIndex, value.length)
    }

    setProductos(newChecked)
    console.log(checked)
    // props.handleFilters(newChecked)
  }
  /////////////////////////////////////////////////

    return ( 
        <SideWrapper>
          <button style={BUTTON} onClick={() => handleToggle(baloncesto)}>Baloncesto</button>
          <button style={BUTTON} onClick={() => handleToggle(casual)}>Casual</button>
          <button style={BUTTON} onClick={() => handleToggle(running)}>Running</button>
          <button style={BUTTON} onClick={() => filtro("hombre")}>Hombre</button>
          <button style={BUTTON} onClick={() => filtro("reset")}>Reset</button>
        </SideWrapper>
     );
}
 
export default Side;