import styled from 'styled-components';

export const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bodyPrimaryInactive};
  overflow: auto;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    padding: 10px;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.success};
  }
`;

export const FilesListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const FolderContainer = styled.span`
  display: flex;
  cursor: pointer;
  padding: 3px 0;
  margin-left: 10px;

  &:hover {
    background: ${({ theme }) => theme.bodyPrimary};
  }
`;

export const FileContainer = styled(FolderContainer)``;
