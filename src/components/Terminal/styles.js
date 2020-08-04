import styled from 'styled-components';

export const Terminal = styled.div`
  grid-area: terminal;
  background: ${({ theme }) => theme.bodyPrimary};
  border-top: 0.5px solid ${({ theme }) => theme.text};
  padding: 10px;
  position: relative;
  overflow: auto;
`;

export const EditableText = styled.span.attrs(() => ({
  contentEditable: 'true',
  spellCheck: 'false',
  tabIndex: 1,
}))`
  width: 50%;
  display: inline-block;
`;

export const BaseText = styled.p`
  color: ${({ theme }) => theme.success};
  float: left;
`;

export const TextFlexContainer = styled.div``;

export const TitleContainer = styled.span`
  h3 {
    font-size: 0.9rem;
    padding: 0 0 5px 0px;
    margin: 0 0 5px 0;
    border-bottom: 0.5px solid ${({ theme }) => theme.path};
    display: inline-block;
  }
`;
