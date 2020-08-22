import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 5vh 75vh 20vh;
  grid-template-areas:
    'aside tabscontainer'
    'aside pagescontainer'
    'aside terminal';
  grid-gap: 1px;
`;

export default Layout;
