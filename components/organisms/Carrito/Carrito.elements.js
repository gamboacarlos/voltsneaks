import styled from 'styled-components';

export const CarritoWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  width: 100%;
  margin: 30px auto;

  @media screen and (max-width: 990px){
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 10px;

  }
  @media screen and (max-width: 750px){
    grid-template-columns: 1fr;
    grid-column-gap: 5px;

  }
`
export const Item = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;

  max-width: 100%;
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 3px;
  cursor: pointer;
`
export const CarritoBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`
export const BodyWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: flex-end;
`
export const CountWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100px;
  height: 50px;
  margin: 5px 5px 0 0;

  a{
    padding: 10px;
    margin: 0;
  }

  p{
    margin: 0 10px;
  }
`;