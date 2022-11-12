import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Paper = styled.div`
  width: 100vw;
  min-height: 55vh;
  background: #FFFFFF;
  border: 1px solid #F5F5F5;
  box-sizing: border-box;
  box-shadow: 0rem .2rem .2vw rgba(106, 106, 106, 0.12);
  border-radius: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;


export const ContainerForm = styled.div`
  width: 50vw;
  padding: 3vh 6vw;
  box-sizing: border-box;
`;

export const ContainerProfile = styled.div`
  width: 50vw;
  height: 55vh;
  padding: 3vh 0vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  button {
    height: 4vh;
    width: 18vh;
  }
`;

export const InformationSection = styled.section`

`;

export const ProfileName = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 1.7vh;
  line-height: 3vh;
  letter-spacing: 0.16px;
  color: #FFA726;
  width: 100%;
  text-align: center;
`;

export const ProfileLocation = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vh;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #0D4A99;
  width: 100%;
  text-align: center;
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 2.5vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #0D4A99;
  padding: 2vh 0vw;
`;


export const ContainerFields = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3vh 0vh;

  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }
`;


export const StyledLink = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.3vh;
  line-height: 3vh;
  color: #666666;
  text-decoration: underline;
  cursor: pointer;
  &:hover{
    opacity: 0.3;
    transition: 300ms ease-in;
  }
  margin: 1vh 0vh;
`;
