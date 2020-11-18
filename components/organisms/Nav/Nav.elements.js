import styled from 'styled-components';

export const NavWrapper = styled.div`
  background-color: white;
  margin: 0 auto;
  padding: 0 100px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  z-index: 999;
`;

export const LogoWrapper = styled.div`
`;

export const MenuWrapper = styled.div`
  width: 28%;
  display: flex;
  justify-content: space-between;
`;

export const CartWrapper = styled.div`
  width: 5%;

`;

export const DropDown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: white;
  border: #eee;
  border-radius: 3px;
  padding: 14px;
  overflow: hidden;
`;
