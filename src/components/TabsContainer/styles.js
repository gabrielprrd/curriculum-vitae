import styled from 'styled-components';

export const TabsContainer = styled.div`
  grid-area: tabscontainer;
  height: 100%;
  background: ${({ theme }) => theme.bodyPrimaryInactive};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TabsInnerContainer = styled.div``;
