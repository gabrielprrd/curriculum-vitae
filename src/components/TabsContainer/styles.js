import styled from 'styled-components';
import device from '../../assets/GlobalStyles/device';

export const TabsContainer = styled.div`
  grid-area: tabscontainer;
  height: 100%;
  background: ${({ theme }) => theme.bodyPrimaryInactive};
  display: flex;
  justify-content: space-between;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.comment};
  }

  @media ${device.laptop} {
    align-items: center;
    height: 100%;
  }

  @media ${device.mobileL} {
    line-height: normal;
    background: ${({ theme }) => theme.bodyPrimary};
    flex-direction: column;
    width: 100%;
    height: 200px;
    position: fixed;
    top: ${({ isMenuClicked }) => (isMenuClicked ? '0' : '-100%')};
    transition: 0.4s;
    z-index: 99;
  }
`;

export const TabsFlexContainer = styled.div`
  display: flex;
  height: 100%;

  @media ${device.mobileL} {
    flex: 1;
    flex-direction: column;
    width: 100%;

    a {
      font-size: 1.5em;
    }
  }
`;

export const InnerTab = styled.div`
  cursor: pointer;
  background: ${({ theme, file, focusedFile }) =>
    (focusedFile === file && theme.bodyPrimary) ||
    (focusedFile !== file && theme.bodyPrimaryInactive)};
  height: 100%;
  margin-right: 1px;
  padding: 8px 30px 8px 5px;
  border-top: 1px solid
    ${({ theme, file, focusedFile }) =>
      (focusedFile === file && theme.path) || (focusedFile !== file && 'none')};

  img {
    height: 15px;
    margin: 0 8px 0 3px;
  }

  @media ${device.tablet} {
    display: flex;
    align-items: center;
  }

  @media ${device.mobileL} {
    flex: 1;
    align-items: stretch;
    justify-content: stretch;
    width: 99vw;

    img {
      height: 30px;
    }
  }
`;

export const Tab = styled.div`
  position: relative;
  display: flex;
`;

export const BurgerMenu = styled.div`
  display: none;
  z-index: 99;
  cursor: pointer;
  background: ${({ theme }) => theme.bodySecondary};
  opacity: 0.7;
  padding: 10px;
  border-radius: 100%;

  @media ${device.mobileL} {
    display: inline-block;
    position: fixed;
    bottom: 15px;
    right: 15px;
  }
`;

export const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${({ theme }) => theme.text};
  margin: 6px 0;
  transition: 0.4s;
  transform: ${({ isMenuClicked }) =>
    isMenuClicked ? 'rotate(-45deg) translate(-9px, 6px)' : 'none'};
`;

export const Bar2 = styled(Bar)`
  transform: none;
  opacity: ${(props) => (props.isMenuClicked ? 0 : 1)};
`;

export const Bar3 = styled(Bar)`
  transform: ${({ isMenuClicked }) =>
    isMenuClicked ? 'rotate(45deg) translate(-8px, -8px)' : 'none'};
`;
