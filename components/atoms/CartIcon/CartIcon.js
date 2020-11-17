import { AiOutlineShoppingCart } from "react-icons/ai";
import { CartIconWrapper, Span} from "./CartIcon.elements";

const CartIcon = ({info}) => {
    return (
        <CartIconWrapper>
            <Span>{info}</Span>
            <AiOutlineShoppingCart size="30px"/>
        </CartIconWrapper>
    )
}

export default CartIcon
