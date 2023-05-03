import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as EscamboLogo} from 'assets/img/TESTE.svg';

export const Principal = styled.div`
  position: relative;
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

export const ContainerLoginForm = styled.div`
  width: 50%;
  height: 100vh;
  background: #FFFFFF;
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
  padding-top: 3vh;
`;

export const Title = styled.div`
    
  justify-content: center;
  display: flex;
  padding: 2vh 0vh;
  align-items: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 5.8vh;
  color: #4C0C6C;
`;

export const Description = styled.div`

  justify-content: center;
  font-family: 'Noto Sans';
  font-style: normal;
  color: #727171;
  font-weight: 400;
  padding-bottom: 7vh;
  font-size: 2.4vh;
  text-align: center;
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ButtonLink = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  font-style: normal;
  font-weight: normal;
  margin-top: 2.2vh;
  text-align: right;
  font-size: 2vh;
  line-height: 1vh;
  text-decoration: none;
  color: #0D4A99;
  :hover {
    cursor: pointer;
  }
`;

export const ContainerButton = styled.div`
  padding-top: 4vh;
  width: 100%;
`;

export const Button = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;


export const InfoText = styled.div`
  position: relative;
  padding-top: 2vh;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.4vh;
  line-height: 2vh;
  color: #B9B7B7;
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
  line-height: 2vh;
  text-decoration: none;
  color: #4C0C6C;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }
`;
