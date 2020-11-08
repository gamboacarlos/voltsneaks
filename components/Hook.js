import { useState } from "react"


const Filtro = () => {

    const [productos, setProductos] = useState([])
    
    const basquetball = productos.filter((products) => (products.categorias[0].nombre === 'Basquetball'))
    const casual = productos.filter((products) => (products.categorias[0].nombre === 'Running'))
    const running = productos.filter((products) => (products.categorias[0].nombre === 'Casual'))

    const switchBasquetball = () => (setResult(basquetball))
    const switchCasual = () => (setResult(casual))
    const switchRunning = () => (setResult(running))


    return {
        switchBasquetball,
        switchCasual,
        switchRunning,
        productos,
        setProductos
    }
}

export default Filtro