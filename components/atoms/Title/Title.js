import { TitleWrapper } from "./Title.elements"


const Title = (props) => {
    return (
        <TitleWrapper {...props}>
            {props.children}
        </TitleWrapper>
    )
}

export default Title
