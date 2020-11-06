import { ImageWrapper, StyledImage } from "./Image.elements"

const Image = (props) => {
    return (
        <ImageWrapper>
            <StyledImage
            {...props}
            />
        </ImageWrapper>
    )
}

export default Image
