import styled from 'styled-components';
import device from './device';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 5vh 75vh 20vh;
  grid-template-areas:
    'aside tabscontainer'
    'aside pagescontainer'
    'aside terminal';
  grid-gap: 1px;

  @media ${device.tablet} {
    grid-template-columns: 100vw;
    grid-template-rows: 5vh 80vh 15vh;
    grid-template-areas:
      'tabscontainer'
      'pagescontainer'
      'terminal';
  }

  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
  }
`;

export default Layout;
