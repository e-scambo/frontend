import styled from 'styled-components';
// import ReturnToPage from 'assets/img/ReturnToPage.png';

export const Principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`;

export const Carousel = styled.div`
  height: 100vh;
`;

export const ContainerReturnToPage = styled.div`
  width: 1vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: left;
  padding-top: 5vh;
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
    width: 100%;
    height: 45vh;
    
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
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 25vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
`;

export const Description = styled.div`
  font-family: 'Noto Sans';
  font-style: semi-bold;
  font-weight: semi-bold;
  font-size: 2.5vh;
  color: #B9B7B7;
  height: 15%
  text-align: left; /* adicionado */
  padding-top: 20vh;
  padding-left: 5px;
`;

export const ContainerButton = styled.div`
  padding-top: 7vh;
  width: 100%;
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
`;
