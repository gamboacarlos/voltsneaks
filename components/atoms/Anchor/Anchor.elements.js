import { StyledText } from "components/atoms/Text/Text.elements"
import styled from 'styled-components';

export const StyledAnchor = styled(StyledText)`
    cursor: pointer;
    font-size: ${props => {
        switch(props.size){
            case "xLarge":
                return "2.4rem"
            case "large":
                return "2rem"
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
    color: ${props => {
        switch(props.color){
            case "grey":
                return props.theme.colors.text2
            case "orange":
                return props.theme.colors.orange
            default:
                return props.theme.colors.text1
        }
    }};
`