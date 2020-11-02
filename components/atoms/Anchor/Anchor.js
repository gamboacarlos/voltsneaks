import Link from "next/link"
import { StyledAnchor } from "./Anchor.elements"

const Anchor = (props) => {
    return (
        <Link href={props.href} passHref>
        <StyledAnchor {...props}>
            {props.children}
        </StyledAnchor>
        </Link>
    )
}

export default Anchor
