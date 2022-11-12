import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ReactComponent as EscamboLogo} from 'assets/img/logoHorizontal.svg';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100vw;
  height: 8vh;

  /* spacing */
  margin: 0;

  /* colors */
  background-color: #ffffff;
  padding-top: 2vh;
  padding-bottom: 2vh;
`;

export const StyledEscamboLogo = styled(EscamboLogo)`
  height: 10vh;
  width: 60%;
  @media (max-width: 426px) {
    width: 100%;
    height: 50px;
`;


export const BoxContent = styled.div`
  width: 60vw;
  height: 7vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const ContainerLogo = styled.div`
  width: 17vw;
  height: 50px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 3.5vh;
  line-height: 2.5vh;
  letter-spacing: 0.16px;
  color: #4c0c6c;

  svg {
    margin: 1vh;
  }
  @media (max-width: 426px) {
    width: 100%;
  }

`;

export const ContainerMenus = styled.div`
  width: 43vw;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  nav {
    margin-right: 3vw;
  }

  button {
    width: 7vw;
    height: 2vh;
  }
  @media (max-width: 425px) {
    button {
      width: 20vw;
    }
  }
`;

export const NavDesktop = styled.nav`
@media (max-width: 426px) {
  display: none;
}
`;
export const NavMobile = styled.nav`
  display: none;
  @media (max-width: 426px) {
    display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  NavLink{
   

  }
  }
  `;

export const NavLink = styled(Link)`

  font-style: normal;
  font-weight: normal;
  font-size: 2.6vh;
  line-height: 3vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #0D4A99;

  text-align: center;

  text-decoration: none;
  text-transform: none;

  &:not(:first-child) {
    margin-left: 1vw;
  }

  &:hover {
    border-bottom: 2px solid #F07D0B;
    transition: ease-in .1s;
  }

  @media (max-width: 426px) {
    font-size: 5vh;
    line-height: 5vh;
    text-align: left;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;



