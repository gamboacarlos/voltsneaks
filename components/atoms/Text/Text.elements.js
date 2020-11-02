import styled from 'styled-components';

export const StyledText = styled.p`

    margin: 0 2rem 0 0;
    text-align: ${props => {
        switch (props.align){
            case "center":
                return "center"
            case "right":
                return "right"
            default:
                return "left"
        }
    }};
    font-size: ${props => {
        switch(props.size){
            case "xLarge":
                return "2.4rem"
            case "large":
                return "2rem"
            case "medium":
                return "1.6rem"
            case "small":
                return"1.3rem"
            case "xSmall":
                return "1rem"
            case "xxSmall":
                return "0.7rem"
            default:
                return "1.6rem"
        }
    }};
    margin-top: ${props => {
        switch(props.mTop){
            case "xLarge":
                return "3rem"
            case "large":
                return "2.2rem"
            case "medium":
                return "1.6rem"
            case "small":
                return"1.2rem"
            case "xSmall":
                return "0.9rem"
            case "xxSmall":
                return "0.7rem"
            default:
                return null
        }
    }};
    font-weight: ${props => {
        switch (props.weight) {
            case "thin":
                return "200"
            case "normal":
                return "400"
            case "bold":
                return "700"
            default:
                return "400"
        }
    }};
    text-decoration: ${props => {
        switch (props.decoration){
            case "underline":
                return "underline"
            case "line-through":
                return "line-through"
            default:
                return "none"
        }
    }};
    text-transform: ${props => props.transform || "none"};
    line-height: ${props => {
            switch(props.size){
                case "xLarge":
                    return "3rem"
                case "large":
                    return "2.2rem"
                case "medium":
                    return "1.6rem"
                case "small":
                    return"1.2rem"
                case "xSmall":
                    return "0.9rem"
                case "xxSmall":
                    return "0.7rem"
                default:
                    return "1.6rem"
            }
        }};

    cursor: ${ ({pointer}) => (pointer ? "pointer" : null) };
`
