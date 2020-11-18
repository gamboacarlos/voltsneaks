import Side from 'components/molecules/FilterControls/FilterControls'
import { Productos } from 'components/organisms'
import Layout from 'components/templates/Layout/Layout'


export default function Home() {


  return (
      <Layout>
        <Side/>
        <Productos/>
      </Layout>
  )
}
