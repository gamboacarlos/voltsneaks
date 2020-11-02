import { Icon }from 'components/atoms'
import React from 'react'
import { StyledText } from '../Text/Text.elements'
import { VoteWrapper } from './Votes.elements'

const Votes = () => {
    return (
        <VoteWrapper>
            <Icon src="voteIcon.svg" width="85%"/>
            <StyledText size="xSmall" weight="bold">28</StyledText>
        </VoteWrapper>
    )
}

export default Votes
