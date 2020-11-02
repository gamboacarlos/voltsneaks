import styled from 'styled-components';


export const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: ${props => props.theme.borders.border1};
  border-radius: 2px;
  padding: .5rem .8rem;
  margin-right: .5rem;

  p{
    margin: 0;
    padding: 0 0.2rem;
  }
`;