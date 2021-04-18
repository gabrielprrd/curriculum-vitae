import React, { useState, useEffect } from 'react';
import SPageContainer from '../../assets/GlobalStyles/pageContainer';
import * as S from './styles';

import Projects from '../../assets/projects';
import downloadablePdf from '../../assets/pdf/downloadablePdf';

// Images
import githubLogo from '../../assets/images/github-logo.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';

export default function Curriculum() {
  const [animation, setAnimation] = useState({ isAnimationOver: false });
  const [secondAnimation, setSecondAnimation] = useState({
    isAnimationOver: false,
  });

  useEffect(() => {
    function startSecondAnimation() {
      setAnimation({ isAnimationOver: true });
    }
    setTimeout(() => {
      startSecondAnimation();
    }, 4000);
  }, []);

  useEffect(() => {
    function stopSecondAnimation() {
      setSecondAnimation({ isAnimationOver: true });
    }
    setTimeout(() => {
      stopSecondAnimation();
    }, 8000);
  }, []);

  return (
    <SPageContainer>
      <S.CurriculumContainer>
        <S.NameContainer isAnimationOver={animation.isAnimationOver}>
          <h1>Gabriel Afonso</h1>
        </S.NameContainer>
        {animation.isAnimationOver && (
          <S.PositionContainer
            isSecondAnimationOver={secondAnimation.isAnimationOver}
          >
            <h2>Full Stack Developer</h2>
          </S.PositionContainer>
        )}
        <S.ContactInfoSection>
          <S.ContactInnerSection>
            <span role="img" aria-label="smartphone emoji">
              📞
            </span>
            <p>+351 936 317 390</p>
          </S.ContactInnerSection>
          <S.ContactInnerSection>
            <span role="img" aria-label="computer emoji">
              🖥
            </span>
            <S.MailLink href="mailto:gabriel.afonso.contato@hotmail.com">
              gabriel.afonso.contato@hotmail.com
            </S.MailLink>
          </S.ContactInnerSection>
          <S.ContactInnerSection>
            <span role="img" aria-label="computer emoji">
              🏘
            </span>
            <p>Porto, Portugal</p>
          </S.ContactInnerSection>

          <S.SocialMediaContainer>
            <S.GithubContainer>
              <img src={githubLogo} alt="github logo" />
              <S.ExternalLink href="https://github.com/gabrielprrd">
                Github
              </S.ExternalLink>
            </S.GithubContainer>
            <S.LinkedinContainer>
              <img src={linkedinLogo} alt="linkedin logo" />

              <S.ExternalLink href="https://www.linkedin.com/in/gabriel-afonso-b1a473104/">
                Linkedin
              </S.ExternalLink>
            </S.LinkedinContainer>
          </S.SocialMediaContainer>
        </S.ContactInfoSection>

        <S.IntroductionText>
          <i>
            &quot;Programming is the superpower of solving people&apos;s
            problems, bringing solutions that automate, organize and connect
            humans and businesses.&quot;
          </i>
        </S.IntroductionText>

        <S.ProjectsSection>
          <h2>Projects</h2>
          {Projects.map((project) => (
            <S.ProjectsSectionInnerContainer key={project.title}>
              <S.ExternalLink href={project.link}>
                {project.title}
              </S.ExternalLink>
              <p>{project.description}</p>
            </S.ProjectsSectionInnerContainer>
          ))}
        </S.ProjectsSection>

        <S.TechSkillsSection>
          <h2>Technical skills</h2>
          <S.TechSkillsInnerContainer>
            <h3>Front-end</h3>
            <p>- HTML, CSS/SASS and Javascript</p>
            <p>- React, Redux and Styled-components</p>
            <p>- Styling libraries such as Bootstrap and Material-UI</p>
            <p>- Template engines such as Handlebars and Thymeleaf</p>
          </S.TechSkillsInnerContainer>

          <S.TechSkillsInnerContainer>
            <h3>Back-end</h3>
            <p>- Java, Java EE and Spring Framework</p>
            <p>- MySQL Database Service</p>
            <p>- MongoDB</p>
            <p>- Knowledge of Node.js and Express</p>
          </S.TechSkillsInnerContainer>

          <S.TechSkillsInnerContainer>
            <h3>Readability, organization and team tools</h3>
            <p>- Version control with Git</p>
            <p>- Agile Methodologies</p>
            <p>
              - Well organized commits with Husky, Commitlint and Commitizen
            </p>
            <p>- Code linting with ESLint and Prettier</p>
            <p>- Knowledge of Jest and JUnit for unit testing</p>
          </S.TechSkillsInnerContainer>
        </S.TechSkillsSection>

        <S.DownloadInstructions>
          To download the pdf{' '}
          <S.ExternalLink href={downloadablePdf}>click here</S.ExternalLink> or
          type <S.NpmCommand>npm run download </S.NpmCommand>
          on the terminal :)
        </S.DownloadInstructions>
      </S.CurriculumContainer>
    </SPageContainer>
  );
}
