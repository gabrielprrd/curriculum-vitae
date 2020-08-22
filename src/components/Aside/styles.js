import styled from 'styled-components';
import device from '../../assets/GlobalStyles/device';

export const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bodyPrimaryInactive};
  overflow: auto;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 0.9rem;
    padding: 7px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.success};
  }

  @media ${device.mobileL} {
    display: none;
  }
`;

export const FilesListContainer = styled.div``;

export const FolderContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  padding: 6px 0 3px 10px;
  padding-left: 10px;

  img {
    height: 15px;
    margin-right: 10px;
  }

  &:hover {
    background: ${({ theme }) => theme.bodyPrimary};
  }
`;

export const FileContainer = styled(FolderContainer)`
  background: ${({ theme, file, focusedFile }) =>
    (focusedFile === file && theme.bodyPrimary) ||
    (focusedFile !== file && theme.bodyPrimaryInactive)};

  padding-left: 20px;
`;
