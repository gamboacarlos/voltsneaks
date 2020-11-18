import styled from 'styled-components';


export const ImageWrapper = styled.div`
  max-width: unset;
  display: flex;
  justify-content: center;
  margin: auto;
  box-sizing: border-box;
`;

export const StyledImage = styled.img`
    max-height: 400px;
    width: 100%;
    max-width: ${props => props.width || "100%"};
    cursor: ${ ({pointer}) => (pointer ? "pointer" : null) };
    object-fit: ${ ({cover}) => (cover ? "cover" : null) };
    filter: brightness(100%);
    transition: filter 500ms ease-in-out;
    display: block;

`;