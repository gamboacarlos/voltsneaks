import Side from 'components/molecules/FilterControls/FilterControls'
import { Anchor, CartIcon } from 'components/atoms'
import { useData } from 'contexts/DataProvider'
import { Productos } from 'components/organisms'
import Layout from 'components/templates/Layout/Layout'


export default function Home() {

  const { carrito } = useData()

  return (
      <Layout>
        <Anchor href="/cart">Carrito</Anchor>
        <CartIcon info={carrito.length}/>
        <Side/>
        <Productos/>
      </Layout>
  )
}
