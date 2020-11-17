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
                return "#161616"
            }
            }};
    border-color: ${props => {
        switch(props.color){
            case "true":
                return props.theme.colors.naranja
            default:
                return "#eee"
            }
            }};
    margin: 0 1rem 0 0;
    border-radius: 2px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
`