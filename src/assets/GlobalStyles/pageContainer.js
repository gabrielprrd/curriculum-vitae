import styled from 'styled-components';

const SPageContainer = styled.div`
  grid-area: pagescontainer;
  background: ${({ theme }) => theme.bodyPrimary};
  overflow: auto;
  padding: 20px;
`;

export default SPageContainer;
