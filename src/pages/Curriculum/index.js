import React from 'react';
import SPageContainer from '../../assets/GlobalStyles/pageContainer';
import * as S from './styles';

// Images
import githubLogo from '../../assets/images/github-logo.png';
import linkedinLogo from '../../assets/images/linkedin-logo.png';

export default function Curriculum() {
  return (
    <SPageContainer>
      <S.CurriculumContainer>
        <S.NamePositionContainer>
          <h1>const Gabriel_Afonso = {'{'} </h1>
          <h2>position: &apos;Fullstack Web Developer&apos;</h2>
          <h1>{'};'}</h1>
        </S.NamePositionContainer>
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

          <p>
            To check this resume&apos;s repository click{' '}
            <S.ExternalLink href="https://github.com/gabrielprrd/curriculum-vitae">
              here
            </S.ExternalLink>
            .
          </p>
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
