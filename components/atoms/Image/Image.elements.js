import styled from 'styled-components';


export const ImageWrapper = styled.div`
  max-width: unset;
  display: flex;
  /* -moz-box-pack: center; */
  justify-content: center;
  margin: auto;
  box-sizing: border-box;
`;

export const StyledImage = styled.img`
    max-height: 300px;
    width: 100%;
    max-width: ${props => props.width || "100%"};
    cursor: ${ ({pointer}) => (pointer ? "pointer" : null) };
    object-fit: ${ ({cover}) => (cover ? "cover" : null) };
    filter: brightness(100%);
    transition: filter 500ms ease-in-out;
    display: block;

    &:hover{
        filter: brightness(110%);
    }
`;