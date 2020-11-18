import React from 'react'
import { FilterButtonWrapper } from './FilterButton.elements'

const FilterButton = (props) => {
    return (
        <FilterButtonWrapper {...props} type={props.type}>
            {props.children}
        </FilterButtonWrapper>
    )
}

export default FilterButton
