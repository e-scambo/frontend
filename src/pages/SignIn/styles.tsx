import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as EscamboLogo} from 'assets/img/TESTE.svg';

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

export const Left = styled.div`
  position: relative;
  width: 50%;
  height: 100vh;
  padding: 20px;
  border: solid;
`;

export const Carousel = styled.div`
  height: 100vh;
`;

export const ContainerLoginForm = styled.div`
  width: 100%;
  padding: 10vh;
  background: #FFFFFF;
  box-sizing: border-box;
  padding: 0vh 14vh 14vh 14vh;
  border: solid;
  
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
  padding-top: 1vw;
  border: solid;
  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }
`;

export const StyledEscamboLogo = styled(EscamboLogo)`
  height: 50%;
  width: 50%;
`;

export const ContainerLogo = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
`;

export const Title = styled.div`
    
  justify-content: center;
  display: flex;
  padding: 2vh 0vh;
  align-items: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  color: #4C0C6C;
`;

export const Description = styled.div`

  justify-content: center;
  font-family: 'Noto Sans';
  font-style: normal;
  color: #727171;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

export const ButtonLink = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  margin-top: 1.5vh;
  margin-left: 24vw;
  font-size: 2vh;
  line-height: 3vh;
  text-decoration-line: underline;
  color: #0D4A99;

  :hover {
    cursor: pointer;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 3vw 3vw;
`;


export const InfoText = styled.div`
  margin-top: 2vw;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 2vh;
  line-height: 3vh;
  color: #727171;
  
  display: inline;

  a {
    margin-left: .3vw;
  }
`;

export const Redirect = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4vh;
  line-height: 3vh;
  color: #4C0C6C;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }
`;
