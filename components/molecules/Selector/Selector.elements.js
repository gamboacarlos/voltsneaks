import styled from 'styled-components';

export const SelectorWrapper = styled.div`
  width: 300px;
  margin: 25px 0;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const SwitchWrapper = styled.label`
  font-size: 26px;
  color: #4D4D4D;
  position: absolute;
  z-index: 10;
  padding-left: 50px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  &:checked {
      ~ span {
          border-color: #00EA90;
          box-shadow: 0px 0px 0px 15px #00EA90 inset;
          ::after {
              opacity: 1;
              transform: scale(1);
          }
      }
  }
}
`
export const Checkmark = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 100px;
  background-color: #FFF;
  border: 2px solid #00EA90;
  box-shadow: 0px 0px 0px 0px #00EA90 inset;
  transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);

    ::after {
        content: '';
        width: 100%;
        height: 100%;
        opacity: 0;
        z-index: 4;
        position: absolute;
        transform: scale(0);
        background-size: 50%;
        background-image: url('http://s6.picofile.com/d/8392306668/c38c12a0-6db3-47d4-a80c-7dad8fab5186/checkmark.svg');
        background-repeat: no-repeat;
        background-position: center;
        transition-delay: 0.2s !important;
        transition: all 0.25s cubic-bezier(0, 1.05, 0.72, 1.07);
    }
`


// export const CheckIcon = styled.span`
//   background-image: url("../public/check.svg");
//   width: 1.5rem;
//   height: 1.5rem;
//   /* background-position: 50%; */
//   /* background-size: 100% 100%; */
//   pointer-events: none;
//   user-select: none;
//   /* vertical-align: middle; */
// `;