import styled from 'styled-components';

// Containers

export const CurriculumContainer = styled.div`
  display: flex;
  flex-direction: column;

  div > div {
    margin-top: 20px;
  }
`;

export const NamePositionContainer = styled.div`
  margin-bottom: 20px;

  h2 {
    margin: 20px;
  }
`;

export const ContactInfoSection = styled.div``;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const GithubContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;

  img {
    height: 60px;
  }
`;

export const LinkedinContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 40px;
    margin-right: 10px;
  }
`;

export const ProjectsSection = styled.div`
  margin: 20px 0;
`;

export const ProjectsSectionInnerContainer = styled.div`
  a {
    margin: 20px 0 20px 0;
  }
`;

export const TechSkillsSection = styled.div`
  margin: 20px 0;
`;

export const TechSkillsInnerContainer = styled.div``;

// Typography

export const IntroductionText = styled.p`
  padding: 40px;
  justify-self: center;
  text-align: center;
`;

export const DownloadInstructions = styled.p`
  margin: 20px 0;
`;

export const NpmCommand = styled.p`
  display: inline;
  color: ${({ theme }) => theme.command};
`;

export const ExternalLink = styled.a.attrs(() => ({
  contentEditable: 'false',
}))`
  color: ${({ theme }) => theme.text};
`;
