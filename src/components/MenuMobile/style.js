// Menu.styled.js
import styled from 'styled-components';
import {Link} from 'react-router-dom';
export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #ffffff;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  
  @media (max-width: 436px){
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #4e096b;
    text-decoration: none;
    transition: color 0.3s linear;
    text-align: center;
  }
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
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
    font-size: 3vh;
    line-height: 5vh;
    text-align: left;
    padding: 2rem;
    width: 100%;
    display: table;
  }
`;
