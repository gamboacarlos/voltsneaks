const { useState, createContext, useEffect, useContext } = require("react");

///////////////// Export Context /////////////////
export const DataContext = createContext();
export const useData = () => useContext(DataContext);

///////////////// Component Function /////////////////
export const DataProvider = ({ children }) => {

/////////////////////// States ///////////////////////
  const [data, setData] = useState([]);
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

///////////////// Graphql Fetch Data /////////////////
  useEffect(() => {
    fetch("http://207.154.235.174:1337/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
                modelo
                descripcion
                precio
                cantidad
                disponible
                id
              }
            }
          `,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.data.products);
        if (Object.keys(productos).length === 0) {
          setProductos(data.data.products);
        }
      });
  }, []);

///////////////// Local Storage /////////////////
  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) setCarrito(dataCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(carrito));
  }, [carrito]);

///////////////// Add Product To Cart /////////////////
  const agregarProd = (prod) => {
    const check = carrito.every((item) => item.id !== prod.id);
    if (check) {
      let data = productos.filter((product) => product.id === prod.id);
      setCarrito([...carrito, ...data]);
      console.log(carrito);
    } else {
      alert("El producto ya se encuentra en el carrito.");
    }
  };

///////////////// Remove Product From Cart /////////////////
  const eliminarProd = (id) => {
    let filt = carrito.filter((prod) => prod.id !== id);
    setCarrito(filt);
  };

///////////////// Increase Quantity /////////////////
  const aumentar = (id) => {
    carrito.map((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
    });
    setCarrito([...carrito]);
  };

///////////////// Decrease Quantity /////////////////
  const disminuir = (id) => {
    carrito.map((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
    });
    setCarrito([...carrito]);
  };

///////////////// Object To Export /////////////////
  const value = {
    data,
    productos,
    setProductos,
    carrito,
    agregarProd,
    eliminarProd,
    aumentar,
    disminuir
  };

  return (<DataContext.Provider value={value}>
                {children}
          </DataContext.Provider>)
};
