import { Anchor, CartIcon, Logo } from "components/atoms"
import Link from "next/link"
import { LogoWrapper, MenuWrapper, NavWrapper } from "./Nav.elements"


const Nav = ({ carrito }) => {
    return (
        <NavWrapper>
          <LogoWrapper>
            <Logo/>
          </LogoWrapper>
          <MenuWrapper>
            <Anchor size="xSmall" href="/">Marcas</Anchor>
            <Anchor size="xSmall" href="/">Estilos</Anchor>
            <Anchor size="xSmall" href="/">Hombre</Anchor>
            <Anchor size="xSmall" href="/">Mujer</Anchor>
          </MenuWrapper>
            <CartIcon info={carrito.length}/>
        </NavWrapper>
    )
}

export default Nav
