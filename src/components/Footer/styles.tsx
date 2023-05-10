import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  bottom: 0%;
  width: 100vw;
  height: 30vh;

  /* spacing */
  margin: 0;

  /* colors */
  background-color: #4C0C6C;
  padding-top: 15vh;
  padding-bottom: 25vh;
`;

export const BoxContent = styled.div`
  color: #ffffff;
  width: 60vw;
  height: 7vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
`;

export const BoxColumn = styled.div`
  color: #ffffff;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 2.4vw;
`;

export const Title = styled.div`
  color: #ffffff;
  font-family: 'Noto Sans';
  font-style: bold;
  font-weight: 800;
  font-size: 1vw;
  margin-top: 1.4vw;
`;

export const NavLink = styled(Link)`
  font-style: normal;
  margin-top: 15vw;
  font-weight: 200;
  font-size: 1vw;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: rgba(255, 255, 255, 0.75);
  text-align: left;

  text-decoration: none;
  text-transform: none;

  &:hover {
    transition: ease-in .1s;
  }
`;

export const Hr = styled.hr`
  margin-top: 25vh;
  margin-right:15vw;
  margin-left: 15vw;
  border-top: 0.1px solid;
  color: rgba(255, 255, 255, 0.25);
`;

export const Logo = styled.img`
  position: absolute;
  height: auto;
  width: 12vw;
  left: 10%;
  top: 30%;
`;

export const Contact = styled.a`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  display: flex;
  padding: 1vw;
  height: auto;
  width: 3vw;
`;

export const BoxColumnContact = styled.div`
  display: flex;
  padding-top: 5vw;
  padding-left: 2vw;
  margin-left: 2vw;
`;
