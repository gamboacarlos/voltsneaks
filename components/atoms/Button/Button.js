import Link from 'next/link'
import React from 'react'
import { ButtonWrapper } from './Button.elements'

const Button = (props) => {
    return (
        <Link href={props.href} passHref>
        <ButtonWrapper {...props}
        type={props.type}
        >
            {props.children}
        </ButtonWrapper>
        </Link>
    )
}

export default Button
