import styled from 'styled-components';

export const ButtonWrapper = styled.a`
    padding: ${props => {
        switch(props.size){
            case "large":
                return "1rem 5.2rem"
                default:
                    return "0.7rem 1.2rem"
                }
            }};
    border: 1px solid transparent;
    background-color: white;
    color: ${({theme}) => theme.colors.fontPrimary};
    border-color: #eee;
    border-radius: 2px;
    font-weight: 700;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.2rem;
    max-height: 44px;
`