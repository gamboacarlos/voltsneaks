import Axios from 'axios'
import Productos from 'components/Productos'
import ProductosGrid from 'components/ProductosGrid'
import Side from 'components/Side'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'



const IndexWrapper = styled.div`
margin: 0 auto;
width: 90%;
display: flex;
justify-content: center;
`


export default function Home() {

  const [data, setData] = useState([])
  const [categoria, setCategoria] = useState([])
  // const { ProductCard } = Productos(data, categoria)
  const { Products } = ProductosGrid(data, categoria)

  useEffect(() => {
    const apiCall = async () =>{
      const getData = await Axios.get("http://207.154.235.174:1337/products")
      const categorias = await Axios.get("http://207.154.235.174:1337/categorias")
      // console.log(getData.data)
      setData(getData.data)
      setCategoria(categorias.data[0])
    }
    apiCall()
  }, [])


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      </Head>

    <IndexWrapper>
      <Side/>
      <Products/>
    </IndexWrapper>
    </>
  )
}
