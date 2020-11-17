import ProductosGrid from 'components/ProductosGrid'
import Side from 'components/Side'
import styled from 'styled-components'
import Head from 'next/head'
import { Anchor, CartIcon } from 'components/atoms'
import { useData } from 'components/DataProvider'


const IndexWrapper = styled.div`
margin: 0 auto;
width: 90%;
display: flex;
justify-content: center;
`

export default function Home() {

  const { carrito } = useData()


  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossOrigin="anonymous" />
      </Head>
      <IndexWrapper>
        <Anchor href="/cart">Carrito</Anchor>
        <CartIcon info={carrito.length}/>
        <Side/>
        <ProductosGrid/>
      </IndexWrapper>
      {/* <Carrito carrito={carrito}  eliminarProd={eliminarProd} /> */}
    </>
  )
}
