import Link from "next/link";
import { BsBag } from "react-icons/bs";
import { CartIconWrapper, Span} from "./CartIcon.elements";


const CartIcon = ({info}) => {
    return (
      <Link href="/cart" passHref>
        <CartIconWrapper>
            <Span>{info}</Span>
            <BsBag size="25px"/>
        </CartIconWrapper>
      </Link>
    )
}

export default CartIcon
