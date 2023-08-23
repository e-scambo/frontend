import styled from 'styled-components';
// import ReturnToPage from 'assets/img/ReturnToPage.png';

export const Principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 768px) {
    width: auto;
    justify-content: flex-start;
    flex-direction: column;
    padding: 10%;
    height: 100vh;
  }
`;

export const Carousel = styled.div`
  height: 100vh;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContainerReturnToPage = styled.div`
  width: 1vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: left;
  padding-top: 5vh;
  
  @media (max-width: 768px) {
    width: 1vw;
    justify-content: flex-start;
  }
`;

export const StyledReturnToPage = styled.div`
  height: 4vh;
  width: 4vh;
  cursor: pointer;
`;

export const ContainerLoginForm = styled.div`
  width: 50%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0vh 14vh 14vh 14vh;
  
  @media (max-width: 426px) {
    width: auto;
    height: auto;
    padding: 0;
    
  }
`;

export const ContainerFields = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 23vh;
  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }

  @media (max-width: 1115px) {
    padding: 0;
    padding-top: 2vh;
    font-size: 2vh;
    height: auto;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-top: 2vh;
    font-size: 1.6vh;
    height: auto;
    justify-content: center;
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 25vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    height: auto;
    width: auto;
  }
`;

export const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: bold;
  font-weight: bold;
  font-size: 8vh;
  color: #4E096B;
  height: 20%;
  padding-top: 12vh;
  white-space: pre-line;
  
  @media (max-width: 1115px) {
    padding: 0;
    font-size: 6vh;
    height: auto;
  }

  @media (max-width: 600px) {
    padding: 0;
    font-size: 4vh;
    height: auto;
  }
`;

export const Description = styled.div`
  font-family: 'Noto Sans';
  font-style: semi-bold;
  font-weight: semi-bold;
  font-size: 2.5vh;
  color: #B9B7B7;
  height: 15%;
  text-align: left; /* adicionado */
  padding-top: 20vh;
  padding-left: 5px;
  
  @media (max-width: 1115px) {
    padding: 0;
    padding-top: 10vh;
    font-size: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-top: 10vh;
    font-size: 1.6vh;
    height: auto;
  }
`;

export const ContainerButton = styled.div`
  padding-top: 7vh;
  width: 100%;
  
  @media (max-width: 1115px) {
    padding: 0;
    padding-top: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    padding: 0;
    padding-top: 2vh;
    height: auto;
  }
`;

export const InfoText = styled.div`
  position: relative;
  top: -10px;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 2vh;
  line-height: 2vh;
  color: #727171;
  display: inline;

  a {
    margin-left: .3vw;
  }
`;

export const Terms = styled.div`
  position: relative;
  padding-top: 7vh;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 2.2vh;
  line-height: 2vh;
  color: #727171;
  display: inline-block;
  span {
    display: inline;
  }

  a {
    margin-left: .3vw;
  }

  @media (max-width: 1115px) {
    padding-top: auto;
    font-size: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    font-size: 1.8vh;
    height: auto;
    padding-top: 7vh;
  }
`;

export const PrivacyPolicy = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-size: 2.2vh;
  line-height: 2vh;
  text-decoration: none;
  color: #4C0C6C;
  cursor: pointer;

  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }

  span {
    color: #727171;
  }

  @media (max-width: 1115px) {
    font-size: 2vh;
    height: auto;
  }

  @media (max-width: 600px) {
    font-size: 1.8vh;
    height: auto;
  }
`;
