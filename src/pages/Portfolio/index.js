import React from 'react';
import * as S from './styles';
import SPageContainer from '../../assets/GlobalStyles/pageContainer';
import Projects from '../../assets/projects';

export default function Portfolio() {
  return (
    <SPageContainer suppressContentEditableWarning>
      <h1>Some Things I&apos;ve Built</h1>
      {Projects.map((project) => (
        <S.ProjectContainer>
          <S.ReadableContentContainer>
            <S.FeaturedProject>Featured project</S.FeaturedProject>
            <S.ProjectTitle>{project.title}</S.ProjectTitle>
            <S.DescriptionContainer>
              {project.description}
            </S.DescriptionContainer>
            <S.TechnologiesUsed>{project.technologies}</S.TechnologiesUsed>
            <S.GithubContainer>Github</S.GithubContainer>
          </S.ReadableContentContainer>
          <S.ImageContainer>
            <S.HoverBackground />
          </S.ImageContainer>
        </S.ProjectContainer>
      ))}
    </SPageContainer>
  );
}
