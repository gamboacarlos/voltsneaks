import { Icon }from 'components/atoms'
import React from 'react'
import { StyledText } from '../Text/Text.elements'
import { CommentsWrapper } from './Comments.elements'

const Comments = () => {
    return (
        <CommentsWrapper>
            <Icon src="commentsIcon.svg" width="1.1rem" contrast="20%"/>
            <StyledText size="xSmall" color="grey" weight="bold">28</StyledText>
        </CommentsWrapper>
    )
}

export default Comments
