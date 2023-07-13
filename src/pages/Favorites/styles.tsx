import styled from 'styled-components';

export const TitleArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 15vh;
  background: #FFFFFF;
  padding-left: 10vw;
  padding-top: 12vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    top: 5vh; /* Ajuste a posição vertical para telas menores */
    left: 2vw; /* Ajuste a posição horizontal para telas menores */
    width: 80vw;
    height: 8vh;
    flex-direction: column;
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

