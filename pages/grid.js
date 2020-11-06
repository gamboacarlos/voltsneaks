import Axios from 'axios'
import Productos from 'components/Productos'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {

  const [data, setData] = useState([])
  const { ProductCard } = Productos(data)

  useEffect(() => {
    const apiCall = async () =>{
      const getData = await Axios.get("https://strapi-base.herokuapp.com/productos")
      // console.log(getData.data)
      setData(getData.data)
    }
    apiCall()
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
      </Head>

    <ProductCard/>

    </>
  )
}
