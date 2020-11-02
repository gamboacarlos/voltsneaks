import styled from 'styled-components';


export const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: ${props => props.theme.borders.border1};
  border-radius: 3px;

  p{
    margin: 0;
    padding: 0.5rem 0;
  }
`;