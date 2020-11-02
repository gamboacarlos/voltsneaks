import {SubmitWrapper} from './Submit.elements'

const Submit = (props) => {
    return (
        <SubmitWrapper type="submit" {...props}>
            {props.children}
        </SubmitWrapper>
    )
}

export default Submit
