import { Text } from "components/atoms"
import { Checkbox, Checkmark, SwitchWrapper, SelectorWrapper } from "./Selector.elements"


const Selector = ({children, productos, baloncesto}) => {
    return (
        <SelectorWrapper >
            <label>{children}</label>
            <SwitchWrapper>
                <Checkbox type="checkbox" />
                <Checkmark/>
            </SwitchWrapper>
        </SelectorWrapper>
    )
}

export default Selector
