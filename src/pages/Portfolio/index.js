import React from 'react';
import * as S from './styles';
import SPageContainer from '../../assets/GlobalStyles/pageContainer';
import Projects from '../../assets/projects';

// images
import githubLogo from '../../assets/images/github-logo.png';

export default function Portfolio() {
  return (
    <SPageContainer suppressContentEditableWarning>
      <S.PageTitle>
        <h1>Some Things I&apos;ve Built</h1>
        <hr />
      </S.PageTitle>
      {Projects.map((project, index) => (
        <S.ProjectContainer key={project.title}>
          <S.ReadableContentContainer index={index}>
            <S.FeaturedProject>Featured project</S.FeaturedProject>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.DescriptionContainer>
              {project.description}
            </S.DescriptionContainer>
            <S.TechnologiesUsed>
              {project.technologies.map((technology) => (
                <p key={technology}>{technology}</p>
              ))}
            </S.TechnologiesUsed>
            <S.GithubContainer>
              <img src={githubLogo} alt="github logo" />
            </S.GithubContainer>
          </S.ReadableContentContainer>
          <S.ImageContainer index={index}>
            <img src={project.img} alt="project's screenshot" />
            {/* <S.HoverBackground /> */}
          </S.ImageContainer>
        </S.ProjectContainer>
      ))}
    </SPageContainer>
  );
}
