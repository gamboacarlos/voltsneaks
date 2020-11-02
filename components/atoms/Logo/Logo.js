import Link from "next/link"
import { LogoWrapper } from "./Logo.elements"


const Logo = () => {
    return (
        <Link href="/" passHref>
        <LogoWrapper>
            P
        </LogoWrapper>
        </Link>
    )
}

export default Logo
