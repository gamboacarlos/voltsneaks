import Axios from 'axios'
import ProductosGrid from 'components/ProductosGrid'
import Side from 'components/Side'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Head from 'next/head'


const IndexWrapper = styled.div`
margin: 0 auto;
width: 90%;
display: flex;
justify-content: center;
`
export default function Home() {

  const [productos, setProductos] = useState([])
  const [filter, setFilter] = useState('')

const items = () => {
  const basquetball = productos.filter((products) => (products.categorias[0].nombre === 'Basquetball'))
  const casual = productos.filter((products) => (products.categorias[0].nombre === 'Casual'))
  const running = productos.filter((products) => (products.categorias[0].nombre === 'Running'))

  if(filter === "basquetball"){
    return basquetball
  }else{
    null
  }
}
 
  setFilter('basquetball')

  const apiCall = async () =>{
  const getData = await Axios.get("http://207.154.235.174:1337/products")
  setProductos(getData.data)
}

  useEffect(() => {
    apiCall()
  }, [filter])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      </Head>

    <IndexWrapper>
      <Side/>
      <ProductosGrid items={productos}/>
    </IndexWrapper>
    </>
  )
}
