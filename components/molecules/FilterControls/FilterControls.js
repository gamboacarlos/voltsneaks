import { FilterButton } from "components/atoms"
import { useData } from "contexts/DataProvider"
import { FilterControlsWrapper } from "./FilterControls.elements"



/////////////////////// Component Function ///////////////////////
const Side = () => {

  const { setProductos, data } = useData()

  const filtro = (categoria) => {

    let baloncesto = data.filter((prod) => prod.categorias[0].nombre === "Basquetball")
    let casual = data.filter((prod) => prod.categorias[0].nombre === "Casual")
    let running = data.filter((prod) => prod.categorias[0].nombre === "Running")
    let mujer = data.filter((prod) => prod.categorias[1].nombre === "Mujer")
    let hombre = data.filter((prod) => prod.categorias[1].nombre === "Hombre")

    switch(categoria){
      case "baloncesto":
        return setProductos(baloncesto)
      case "casual":
        return setProductos(casual)
      case "running":
        return setProductos(running)
      case "hombre":
        return setProductos(hombre)
      case "mujer":
        return setProductos(mujer)
      case "reset":
        return setProductos(data)
    }
  }

    return ( 
        <FilterControlsWrapper>
          <FilterButton onClick={() => filtro("baloncesto")}>Baloncesto</FilterButton>
          <FilterButton onClick={() => filtro("casual")}>Casual</FilterButton>
          <FilterButton onClick={() => filtro("running")}>Running</FilterButton>
          <FilterButton onClick={() => filtro("mujer")}>Mujer</FilterButton>
          <FilterButton onClick={() => filtro("hombre")}>Hombre</FilterButton>
          <FilterButton onClick={() => filtro("reset")}>Reset</FilterButton>
        </FilterControlsWrapper>
     );
}
 
export default Side;


  /////////////////////////////////////////////////

  // const baloncesto = data.filter((prod) => prod.categorias[0].nombre === "Basquetball")
  // const casual = data.filter((prod) => prod.categorias[0].nombre === "Casual")
  // const running = data.filter((prod) => prod.categorias[0].nombre === "Running")
  // const hombre = data.filter((prod) => prod.categorias[1].nombre === "Hombre")

  // const handleToggle = (value) => {

  //   const currentIndex = productos.indexOf(...value)
  //   const newChecked = [...productos]

  //   if(currentIndex === -1){
  //     newChecked.push(...value)
  //   }else{
  //     newChecked.splice(currentIndex, value.length)
  //   }

  //   setProductos(newChecked)
  //   console.log(checked)
  //   // props.handleFilters(newChecked)
  // }
  /////////////////////////////////////////////////