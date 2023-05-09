import styled from 'styled-components';

export const TitleCreate = styled.div`
  width: 40vw;
  height: auto;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 426px) {
    width: 80vw;
    height: 100vh;
    flex-direction: column;
  }
`;

export const Paper = styled.div`
  width: 70vw;
  height: 100vh;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 426px) {
    width: 80vw;
    height: 100vh;
    flex-direction: column;
  }
`;

export const ContainerLeft = styled.div`
  width: 65vw;
  padding: 5vh 6vw;
  box-sizing: border-box;

  @media (max-width: 426px) {
    width: 60vw;
    padding: 0px;
  }
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 7vh;
  color: #4C0C6C;
  display: flex;
  flex-direction: row;
`;

export const ContainerReturnToPage = styled.div`
  padding-right: 2vw;
`;

export const StyledReturnToPage = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const ContainerFields = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3vh 0vh;

  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }
`;

export const ContainerRight = styled.div`
  width: 25vw;
  height: 55vh;
  padding: 3vh 0vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  button {
    height: 4vh;
    width: 18vh;
  }
  @media (max-width: 426px) {
    width: 60vw;
    padding: 0px;
  }
`;

export const ContainerButton = styled.div`
  width: 80vw;
  height: 25vh;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5vh;

  button {
    height: 8.5vh;
    width: 80vh;
    margin: 0 auto;
  }

  @media (max-width: 426px) {
    width: 80vw;
    height: 100vh;
    flex-direction: column;
  }
`;

export const ContainerMegaFileInput = styled.div`
  width: 33vw;
  height: 48.5vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 4vh;
  padding-top: 2vh;
`;

export const ContainerFileInput = styled.div`
  width: 28vw;
  height: 18vh;
  display: flex;
  flex-direction: row;

  /* Aplica uma margem à direita em cada FileInput, exceto para o último */
  & > :not(:last-child) {
    margin-right: 2vw;
  }
`;
