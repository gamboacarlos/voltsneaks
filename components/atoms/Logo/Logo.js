import Link from "next/link"
import { LogoWrapper } from "./Logo.elements"


const Logo = () => {
    return (
        <Link href="/" passHref>
        <LogoWrapper>
            VOLT<span>SNEAKS</span>
        </LogoWrapper>
        </Link>
    )
}

export default Logo
