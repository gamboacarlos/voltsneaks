import { Anchor } from 'components/atoms';
import { Carrito } from 'components/organisms';
import Layout from 'components/templates/Layout/Layout';


const cart = () => {


    return (
        <Layout>
            <Anchor href="/">Home</Anchor>
            <Carrito/>
        </Layout>
    )
}

export default cart
