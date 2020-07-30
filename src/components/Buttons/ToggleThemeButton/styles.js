import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  position: relative;
  margin-right: 15px;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 1.5px;
  left: 0;
  width: 50px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    box-shadow: 0 0 5px 5px ${({ theme }) => theme.success};
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: #50fa7b;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 28px;
      transition: 0.2s;
      box-shadow: 0 0 5px 5px ${({ theme }) => theme.success};
    }
  }
`;
