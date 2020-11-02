import moment from "moment"
import "moment/locale/es"
import { StyledText } from "../Text/Text.elements"



const Date = (props) => {
    
    return (
        <StyledText {...props}>
            {moment.locale('es') && moment(props.date).fromNow()}
        </StyledText>
    )
}

export default Date
