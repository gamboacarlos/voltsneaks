const { useState, createContext, useEffect, useContext, useReducer } = require("react");
// import Axios from 'axios'

export const DataContext = createContext()
export const useData = () => useContext(DataContext)

////////////////////////////////////////////////////
// const reducer = (state, action) => {
  
//   switch(action.type){
//     case value:
//   }  
//   return state
// }

// const initialState = {
//   data: [],  
//   productos: [],  
//   carrito: []  
// }
////////////////////////////////////////////////////

export const DataProvider = ({ children }) => {

///////////////////////////////////////////////////////////

  // const [state, dispatch] = useReducer(reducer, initialState)

////////////////////////////////////////////////////////

    const [data, setData] = useState([])
    const [productos, setProductos] = useState([])
    const [carrito, setCarrito] = useState([])
    const [checked, setChecked] = useState([])

    
    useEffect(() => {

      fetch('http://207.154.235.174:1337/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              products {
                marca {
                  nombre
                }
                categorias {
                  nombre
                }
                numeros {
                  numero
                }
                imagenes {
                  url
                }
                descripcion
                precio
                cantidad
                disponible
                id
              }
            }
          `
        })
      })
      .then(res => res.json())
      .then(data => {
        setData(data.data.products)
        if(Object.keys(productos).length === 0){
          setProductos(data.data.products)
        } 
      })
    }, [])
    
    // useEffect(() => {
    //     const apiCall = async () =>{
    //       const getData = await Axios.get("http://207.154.235.174:1337/products")
    //         setData(getData.data)
            // if(Object.keys(productos).length === 0){
            //   setProductos(getData.data)
            // } 
    //     }
    //     apiCall()
    // }, [])

    useEffect(() => {
      const dataCart = JSON.parse(localStorage.getItem('dataCart'))
      if(dataCart) setCarrito(dataCart)
    }, [])

    useEffect(() => {
      localStorage.setItem('dataCart', JSON.stringify(carrito))
    }, [carrito])

    const agregarProd = (prod) => {
      const check = carrito.every((item) => (item.id !== prod.id))
      if(check){
        let data = productos.filter(product => product.id === prod.id)
        setCarrito([...carrito, ...data])
        console.log(carrito)
      }else{
        alert("El producto ya se encuentra en el carrito.")
      }
    }
    
    const eliminarProd = (id) => {
      let filt = carrito.filter((prod) => prod.id !== id) 
      setCarrito(filt)
    }

    const aumentar = (id) =>{
      carrito.map((item) => {
        if(item.id === id){
          item.cantidad += 1
        }
      })
      setCarrito([...carrito])
    }
    const disminuir = (id) =>{
      carrito.map((item) => {
        if(item.id === id){
          item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1;
        }
      })
      setCarrito([...carrito])
    }

    const value = {
      data,
      productos,
      setProductos,
      carrito,
      agregarProd,
      eliminarProd,
      aumentar,
      disminuir,
      checked,
      setChecked
    }
    
    return(
        <DataContext.Provider value={value}>
            { children }
        </DataContext.Provider>
    )
}
