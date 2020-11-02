import styled from 'styled-components';

export const SubmitWrapper = styled.button`
border: 1px solid transparent;
    padding: ${props => {
        switch(props.size){
            case "large":
                return "1rem 5.2rem"
            default:
                return "0 1.3rem"
        }
    }};
    background-color: ${props => {
        switch(props.color){
            case true:
                return props.theme.colors.naranja
                default:
                    return "white"
                }
            }};
    color: ${props => {
        switch(props.color){
            case true:
                return "white"
                default:
                    return props.theme.colors.gris
                }
            }};
    border-color: ${props => {
        switch(props.color){
            case true:
                return props.theme.colors.naranja
                default:
                    return props.theme.colors.gris3
                }
            }};
            margin: 0 1rem 0 0;
            border-radius: 2px;
            font-weight: 700;
            cursor: pointer;
            text-decoration: none;
`