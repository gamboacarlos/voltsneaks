import styled from 'styled-components';

export const StyledIcon = styled.img`
    cursor: ${ ({pointer}) => (pointer ? "pointer" : null) };
    filter: contrast(${props => props.contrast || "100%"});
    width: ${props => props.width || null};
    margin: 0;
    padding: 0;
`;