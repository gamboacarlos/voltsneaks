import styled from 'styled-components';


export const LogoWrapper = styled.p`
  color: ${({theme}) => theme.colors.orange};
  font-size: 1.4rem;
  letter-spacing: -1px;
  line-height: 0;
  font-family: ${({theme}) => theme.fonts.logo};
  cursor: pointer;

    span {
      color: ${({theme}) => theme.colors.fontPrimary};
      letter-spacing: -1px;

    }
`