import styled from 'styled-components';

export const TabsContainer = styled.div`
  grid-area: tabscontainer;
  height: 100%;
  background: ${({ theme }) => theme.bodyPrimaryInactive};
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.comment};
  }
`;
export const TabsFlexContainer = styled.div`
  display: flex;
`;

export const InnerTab = styled.div`
  cursor: pointer;
  background: ${({ theme, file, focusedFile }) =>
    (focusedFile === file && theme.bodyPrimary) ||
    (focusedFile !== file && theme.bodyPrimaryInactive)};
  height: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: 1px;
  padding: 8px 30px 8px 5px;
  border-top: 1px solid
    ${({ theme, file, focusedFile }) =>
      (focusedFile === file && theme.path) || (focusedFile !== file && 'none')};
`;

export const Tab = styled.div`
  position: relative;
  display: flex;
`;
