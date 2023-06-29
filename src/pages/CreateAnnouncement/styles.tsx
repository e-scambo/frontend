import styled from 'styled-components';

export const TitleArea = styled.div`
  width: 40vw;
  height: auto;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 768px) {
    width: 80vw;
    height: 8vh;
    flex-direction: column;
  }
`;

export const Paper = styled.div`
  width: 80vw;
  height: 100vh;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 8vh;

  @media (max-width: 768px) {
    width: 80vw;
    height: 100vh;
    flex-direction: column;
  }
`;
export const ContainerLeft = styled.div`
  width: 40vw;
  padding: 5vh 6vw;
  box-sizing: border-box;

  @media (max-width: 768px) {
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

  @media (max-width: 768px) {
    font-size: 4vh;
  }
`;

export const ContainerReturnToPage = styled.div`
  padding-right: 2vw;

  @media (max-width: 768px) {
    padding-right: 1vw;
  }
`;

export const StyledReturnToPage = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;

  @media (max-width: 768px) {
    height: 80%;
    width: 80%;
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6vh;

  @media (max-width: 768px) {
    margin-top: 4vh;
    flex-direction: column;
  }
`;

export const ContainerFields = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start ;
  padding: 3vh 0vh;

  @media (max-width: 768px) {
    padding: 2vh 0vh;
  }

  div {
    &:not(:first-child) {
      margin-top: 2vh;

      @media (max-width: 768px) {
        margin-top: 1vh;
      }
    }
  }
`;

export const ContainerRight = styled.div`
  width: 40vw;
  height: auto;
  padding-left: 6vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 70vw;
    padding-left: 4vw;
   
  }

  button {
    height: 4vh;
    width: 18vh;

    @media (max-width: 768px) {
      height: 6vh;
      width: 25vh;
    }
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

  @media (max-width: 768px) {
    width: 90vw;
    height: 20vh;
    margin-top: 8vh;
    
  }

  button {
    height: 8.5vh;
    width: 80vh;
    margin: 0 auto;

    @media (max-width: 768px) {
      height: 10vh;
      width: 70vh;
      margin: 0;
      
      
    }
  }

`;

export const ContainerMegaFileInput = styled.div`
  width: 50vw;
  height: 48vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 4vh;
  margin-top: 7.6vh;
  @media (max-width: 768px) {
    width: 70vw;
    height: 60vh;
    padding-bottom: 3vh;
    margin-top: 4vh;

  }
`;

export const ContainerFileInput = styled.div`
  width: 20vw;
  height: 18vh;
  display: flex;
  flex-direction: row;
  

  /* Aplica uma margem à direita em cada FileInput, exceto para o último */
  & > :not(:last-child) {
    margin-right: 2vw;

    @media (max-width: 768px) {
      /* Ajuste as propriedades dimensionais e a margem direita para dispositivos com largura máxima de 768 pixels */
      width: 70vw;
      height: 15vh;
  
      & > :not(:last-child) {
        margin-right: 1vw;
      }
    }
  }
`;
