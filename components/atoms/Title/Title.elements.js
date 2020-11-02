import styled from 'styled-components';


export const TitleWrapper = styled.h1`
text-align: center;
padding-top: 5.5rem;
color: ${props => {
        switch(props.color){
            case "grey":
                return props.theme.colors.text2
            case "orange":
                return props.theme.colors.orange
            default:
                return "props.theme.colors.text1"
        }
    }};
`;