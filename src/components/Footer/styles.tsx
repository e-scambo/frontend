import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 58vh;
  background-color: #4C0C6C;
  position: relative;
  align-items: center;

  /* colors */
  padding-top: 5vh;
  padding-bottom: 5vh;
`;

export const ContainerBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 75%;
  justify-content: center;
  align-items: center;
`;

export const ContainerBoxContact = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 15%;
  justify-content: center;
  align-items: center
`;

export const BoxColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  height: 70%;
  gap: 15%;
  margin-left: 5vw;
  margin-right: 5vw;
`;

export const LogoBoxColumn = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  margin-left: 3vw;
  margin-right: 5vw;
`;

export const SocialBoxColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 15%;
  height: auto;
  margin-right: 5vw;
  gap: 5%;
`;

export const BoxColumnContact = styled.div`
  display: flex;
  width: auto;
  margin-left: 2vw;
  margin-right: 2vw;
`;

export const Title = styled.div`
  color: #ffffff;
  font-family: 'Noto Sans';
  font-weight: bold;
  font-size: 1vw;
`;

export const TitleContact = styled.div`
  color: #ffffff;
  font-family: 'Noto Sans';
  font-style: bold;
  font-weight: 500;
  font-size: 1vw;
`;

export const NavLink = styled(Link)`
  font-style: normal;
  font-weight: 100;
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
  width: 75%;
  border-top: none;
  border-right: none;
  border-left: none;
  color: rgba(255, 255, 255, 0.25);
`;

export const Logo = styled.img`
  height: auto;
  width: 13vw;
`;

export const Social = styled.a`
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  display: flex;
  height: auto;
  width: 2vw;
`;
