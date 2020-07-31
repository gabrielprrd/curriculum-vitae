import styled from 'styled-components';

// Containers

export const CurriculumContainer = styled.div`
  div > div {
    margin-top: 20px;
  }

  /* Typing effect */
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  /* Typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    30% {
      border-color: ${({ theme }) => theme.path};
    }
  }
`;

export const NameContainer = styled.div`
  display: inline-block;
  display: table;

  h1 {
    overflow: ${({ isAnimationOver }) =>
      isAnimationOver ? 'visible' : 'hidden'};
    border-right: ${({ isAnimationOver }) =>
      isAnimationOver ? '' : '0.15em solid'};
    white-space: nowrap;
    animation: ${({ isAnimationOver }) =>
      isAnimationOver
        ? 'none'
        : 'typing 3s steps(30, end), blink-caret 0.5s step-end infinite'};
  }
`;

export const PositionContainer = styled.div`
  display: inline-block;

  h2 {
    overflow: ${({ isSecondAnimationOver }) =>
      isSecondAnimationOver ? 'visible' : 'hidden'};
    border-right: ${({ isSecondAnimationOver }) =>
      isSecondAnimationOver ? '' : '0.15em solid'};
    white-space: nowrap;
    animation: ${({ isSecondAnimationOver }) =>
      isSecondAnimationOver
        ? 'none'
        : 'typing 3s steps(30, end), blink-caret 0.5s step-end infinite'};
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