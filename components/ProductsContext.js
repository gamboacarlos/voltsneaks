import { createContext, useState } from 'react'

export const ProductsContext = createContext({})

export const ProductsProvider = ({ children }) => {
    const [productos, setProductos] = useState(initialState)
    return <ProductsContext.Provider value={{  }}>
        {children}
    </ProductsContext.Provider>
}