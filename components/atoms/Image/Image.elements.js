import styled from 'styled-components';


export const StyledImage = styled.img`
    border-color: none;
    width: ${props => props.width || "100%"};
    object-fit: cover;
    cursor: ${ ({pointer}) => (pointer ? "pointer" : null) };
`;