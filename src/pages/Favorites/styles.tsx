import styled from 'styled-components';
import {IoChevronBack} from 'react-icons/io5';

export const TitleArea = styled.div`
  width: 40vw;
  height: auto;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 5vw;
  padding-top: 10vh;

  @media (max-width: 768px) {
    width: 80vw;
    height: 8vh;
    flex-direction: column;
  }
`;

export const TitleSection = styled.div`
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

export const ContainerReturnToPage = styled.div`
  padding-right: 2vw;
  padding-top: 0.5vh;

  @media (max-width: 768px) {
    padding-right: 1vw;
  }
`;

export const ReturnToPageIcon = styled(IoChevronBack)`
  color: #000;
  font-size: 5vh;

  @media (max-width: 768px) {
    align-items: right;
    font-size: 3.5vh;
    padding-right: 1.2vw;
  }

  @media (max-width: 600px) {
    align-items: center;
    font-size: 3.5vh;
    padding-right: 2vw;
  }
`;

export const ListOfCards = styled.div`
  margin-top: 3vw;
  padding-right: 4.5%;
  padding-left: 4.5%;
  width: 67vw;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

