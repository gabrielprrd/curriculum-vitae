import styled from 'styled-components';
import device from '../../assets/GlobalStyles/device';

const SiFrame = styled.iframe`
  @media ${device.mobileL} {
    height: 60vh;
  }
`;

export default SiFrame;
