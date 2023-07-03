import styled from 'styled-components';
import {Link} from 'react-router-dom';
import InputForm from 'components/InputForm';

export const Paper = styled.div`
  height: 100vh;
  width: 75vw;
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

export const TitleArea = styled.div`
  width: 40vw;
  height: auto;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 20vh;
  padding-left: 5vw;

  @media (max-width: 768px) {
    width: 80vw;
    height: 8vh;
    flex-direction: column;
  }
`;

export const ContainerAvatar = styled.div`
  width: auto;
  height: auto
  position: absolute;
  margin-top: -29vh;
`;

export const ContainerReturnToPage = styled.div`
  padding-right: 2vw;

  @media (max-width: 768px) {
    padding-right: 1vw;
  }
`;

export const ContainerForm = styled.div`
  width: 50vw;
  padding: 3vh 6vw;
  box-sizing: border-box;
`;

export const Title = styled.div`
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
  font-size: 5.2vh;
  line-height: 3vh;
  letter-spacing: 0.16px;
  color: #000;
  width: 100%;
  text-align: center;
`;

export const ProfileLocation = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: normal;
  font-size: 2.1vh;
  margin-top: 3vh;
  padding-bottom: 7vh;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #727171;
  width: 100%;
  text-align: center;
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 2vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #727171;
`;


export const ContainerFields = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3vh 0vh;

  .input-form-container {
    width: 32vw;
  }

  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }
`;

export const StyledInputForm = styled(InputForm)`
  width: 100%;
`;

export const VerticalLine = styled.div`
  align-self: flex-start;
  width: 1px;
  height: 75vh;
  background-color: #B9B7B7;
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
