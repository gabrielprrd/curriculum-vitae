import styled from 'styled-components';
import device from '../../assets/GlobalStyles/device';

export const Terminal = styled.div`
  grid-area: terminal;
  background: ${({ theme }) => theme.bodyPrimary};
  border-top: 0.5px solid ${({ theme }) => theme.text};
  padding: 10px;
  position: relative;
  overflow: auto;

  @media ${device.mobileL} {
    height: 500px;
  }
`;

export const EditableText = styled.input.attrs(() => ({
  tabIndex: 1,
}))`
  background: ${({ theme }) => theme.bodyPrimary};
  border: none;
  height: 100%;
  color: ${({ theme }) => theme.text};
  font-weight: 700;
  font-size: 1em;
  width: auto;
  display: inline-block;
`;

export const BaseText = styled.p`
  color: ${({ theme }) => theme.success};
  float: left;
`;

export const TextFlexContainer = styled.div`
  display: flex;
`;

export const TitleContainer = styled.span`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h3 {
    font-size: 0.9rem;
    padding: 0 0 5px 0px;
    margin: 0 0 5px 0;
    border-bottom: 0.5px solid ${({ theme }) => theme.path};
    display: inline-block;
  }
`;

export const FeedbackText = styled.div`
  float: left;
`;
