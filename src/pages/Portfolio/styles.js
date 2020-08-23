import styled from 'styled-components';
import device from '../../assets/GlobalStyles/device';

export const PageTitle = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  h1 {
    font-size: 1em;
  }

  hr {
    display: inline;
    margin-left: 20px;
    width: 30%;
    border-top: 1px solid;
    border-bottom: none;
    border-left: none;
    border-right: none;
  }
`;

export const ProjectContainer = styled.div`
  margin: 100px 0;
  display: flex;

  @media ${device.tablet} {
    position: relative;
    flex-direction: column-reverse;
  }
`;

export const ReadableContentContainer = styled.div`
  position: relative;
  order: ${({ index }) => (index % 2 === 0 ? '1' : '2')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0 10px 0;
  align-items: ${({ index }) => (index % 2 === 0 ? 'flex-start' : 'flex-end')};
  width: 50%;

  @media ${device.tablet} {
    order: 1;
    z-index: 99;
    margin-top: -100px;
    align-items: flex-start;
  }

  @media ${device.mobileL} {
    width: 80%;
    margin-top: -50px;
  }
`;

export const FeaturedProject = styled.h3`
  font-family: 'Georgia', Times, serif;
  color: ${({ theme }) => theme.command};
  font-size: 1em;
`;

export const ProjectTitle = styled.h2``;

export const DescriptionContainer = styled.div`
  background: ${({ theme }) => theme.bodySecondary};
  border-radius: 3px;
  box-shadow: 1px 3px 5px hsla(0, 0%, 0%, 0.4);
  height: 100%;
  width: 120%;
  padding: 20px;
  font-size: 0.9em;
  z-index: 99;
`;

export const TechnologiesUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;

  p {
    margin: 10px 10px 0 0;
    font-size: 0.9em;
    color: ${({ theme }) => theme.command};
    border: 1px solid ${({ theme }) => theme.command};
    border-radius: 3px;
    padding: 5px;

    &:hover {
      transform: translateY(-5px);
      transition: 0.5s ease;
      box-shadow: 0px 0px 3px ${({ theme }) => theme.command};
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  order: ${({ index }) => (index % 2 === 0 ? '2' : '1')};
  line-height: 0;
  opacity: 0.95;

  img {
    height: 50vh;
  }

  @media ${device.tablet} {
    display: flex;
    justify-content: flex-end;

    img {
      height: auto;
      width: 50vw;
      opacity: 1;
    }
  }

  @media ${device.mobileL} {
    justify-content: center;

    img {
      width: 80vw;
    }
  }
`;

export const GithubContainer = styled.span`
  z-index: 98;

  img {
    height: 60px;
    z-index: 99;
    cursor: pointer;
  }
`;
