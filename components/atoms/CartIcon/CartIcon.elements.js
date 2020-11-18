import styled from 'styled-components';


export const CartIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 50px;
  height: 40px;
  cursor: pointer;
`
export const Span = styled.span`
  position: absolute;
  right: 12px;
  top: 2px;
  color: white;
  background-color: ${({theme}) => theme.colors.orange};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  padding-left: .45rem;
  padding-top: .15rem;
  font-size: .7rem;
`