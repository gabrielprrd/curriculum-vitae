import React, { useState, useEffect } from 'react';
import SPageContainer from '../../assets/GlobalStyles/pageContainer';
import * as S from './styles';

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
    <SPageContainer suppressContentEditableWarning>
      <S.CurriculumContainer>
        <S.NameContainer isAnimationOver={animation.isAnimationOver}>
          <h1>Gabriel Afonso</h1>
        </S.NameContainer>
        {animation.isAnimationOver && (
          <S.PositionContainer
            isSecondAnimationOver={secondAnimation.isAnimationOver}
          >
            <h2>Fullstack Web Developer</h2>
          </S.PositionContainer>
        )}
        <S.ContactInfoSection>
          <p>+351 936 317 390</p>
          <p>gabriel.afonso.contato@hotmail.com</p>
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
          <S.ProjectsSectionInnerContainer>
            <S.ExternalLink href="https://github.com/gabrielprrd/Fullstack-Giphy-App">
              Gabriska&apos;s Gif Searcher
            </S.ExternalLink>
            <p>
              A RESTful application implementing the MERN stack (MongoDB,
              Express.js, React and Node.js) which the user can create an
              account, search for gifs through the Giphy API and save its
              favorites.
            </p>
          </S.ProjectsSectionInnerContainer>
          <S.ProjectsSectionInnerContainer>
            <S.ExternalLink href="https://github.com/gabrielprrd/nortada-ecommerce-clone-backend">
              Nortada&apos;s E-commerce Backend
            </S.ExternalLink>
            <p>
              The backend of a craft beer e-commerce, consuming the
              Stripe&apos;s API to deal with payment process.
            </p>
          </S.ProjectsSectionInnerContainer>
          <S.ProjectsSectionInnerContainer>
            <S.ExternalLink href="https://github.com/gabrielprrd/nortada-ecommerce-clone-frontend">
              Nortada&apos;s E-commerce Frontend
            </S.ExternalLink>
            <p>
              The frontend of the previous project, implemented as a Single Page
              Application with React, using Redux to better state management and
              scalability.
            </p>
          </S.ProjectsSectionInnerContainer>
          <S.ProjectsSectionInnerContainer>
            <S.ExternalLink href="https://github.com/gabrielprrd/nortada-ecommerce-clone-frontend">
              The Calorie Police
            </S.ExternalLink>
            <p>
              React application that calculates user&apos;s daily caloric needs,
              save it on LocalStorage and displays meals that fit the diet,
              consuming the Spoonacular API.
            </p>
          </S.ProjectsSectionInnerContainer>

          <S.ProjectsSectionInnerContainer>
            <S.ExternalLink href="https://github.com/gabrielprrd/curriculum-vitae">
              This website
            </S.ExternalLink>
            <p>
              This React app is my way to show some skills and creativity when
              it comes to my passion of developing software. It simulates an IDE
              like Visual Studio Code so it was interesting to explore new
              approaches between Redux, react&apos;s Context API and
              styled-components to make it work as a web app.
            </p>
            <p>
              Also there is a design challenge when it comes to usability for HR
              professionals without a background in software development.
            </p>
          </S.ProjectsSectionInnerContainer>
        </S.ProjectsSection>

        <S.TechSkillsSection>
          <h2>Technical skills</h2>
          <S.TechSkillsInnerContainer>
            <h3>Front end</h3>
            <p>- HTML, CSS(SASS/SCSS) and Javascript</p>
            <p>- React: Redux, Router, Styled-components</p>
          </S.TechSkillsInnerContainer>

          <S.TechSkillsInnerContainer>
            <h3>Back end</h3>
            <p>- Node.js and Express</p>
            <p>- Mongoose for MongoDB</p>
            <p>- Sequelize for MySQL</p>
            <p>- Authentication with JWT</p>
          </S.TechSkillsInnerContainer>

          <S.TechSkillsInnerContainer>
            <h3>Readability, organization and team tools</h3>
            <p>- Version control with Git</p>
            <path>
              - Well organized commits with Husky, Commitlint and Commitzen
            </path>
            <p>- Code linting with ESLint and Prettier</p>
            <p>- Better deployment with Docker containers</p>
            <p>- Jest for unit testing</p>
          </S.TechSkillsInnerContainer>
        </S.TechSkillsSection>

        <S.DownloadInstructions>
          To download the pdf click here or type{' '}
          <S.NpmCommand>npm run download </S.NpmCommand>
          on the terminal :)
        </S.DownloadInstructions>
      </S.CurriculumContainer>
    </SPageContainer>
  );
}
