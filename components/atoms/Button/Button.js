import React from 'react'
import { ButtonWrapper } from './Button.elements'

const Button = (props) => {
    return (
        <ButtonWrapper {...props} type={props.type}>
            {props.children}
        </ButtonWrapper>
    )
}

export default Button
