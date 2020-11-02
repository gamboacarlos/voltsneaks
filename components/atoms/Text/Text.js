import { StyledText } from "./Text.elements"

const Text = (props) => {
    return (
        <StyledText {...props}>{props.children}</StyledText>
    )
}
export default Text