import styled from 'styled-components';

export const ProjectContainer = styled.div`
  margin: 20px 0;
`;

export const ReadableContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const FeaturedProject = styled.h3`
  color: ${({ theme }) => theme.command};
`;

export const ProjectTitle = styled.h2``;

export const DescriptionContainer = styled.div`
  background: ${({ theme }) => theme.bodySecondary};
  padding: 20px;
`;

export const TechnologiesUsed = styled.div``;

export const ImageContainer = styled.div`
  height: 200px;
  width: 300px;
  background: red;
`;

export const HoverBackground = styled.div``;

export const GithubContainer = styled.div``;
