import styled from 'styled-components';

export const ButtonWrapper = styled.a`
    border: 1px solid transparent;
    padding: ${props => {
        switch(props.size){
            case "large":
                return "1rem 5.2rem"
            default:
                return "0.7rem 1.2rem"
        }
    }};
    background-color: ${props => {
        switch(props.color){
            case "true":
                return props.theme.colors.naranja
                default:
                    return "white"
                }
            }};
    color: ${props => {
        switch(props.color){
            case "true":
                return "white"
                default:
                    return props.theme.colors.text1
                }
            }};
    border-color: ${props => {
        switch(props.color){
            case "true":
                return props.theme.colors.naranja
                default:
                    return props.theme.colors.grey1
                }
            }};
    margin: 0 1rem 0 0;
    border-radius: 2px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
`