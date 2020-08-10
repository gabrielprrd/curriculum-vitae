import styled from 'styled-components';

export const HideTerminalButton = styled.div`
  position: absolute;
  right: 0px;
  top: 7px;
  cursor: pointer;
  z-index: 99;
`;

export const Bar = styled.div`
  width: 12px;
  height: 2px;
  background-color: white;
  margin: 6px 8px;
  transform: rotate(-45deg) translate(-6px, 0px);
`;

export const Bar2 = styled(Bar)`
  transform: rotate(45deg) translate(-6px, 0px);
`;
