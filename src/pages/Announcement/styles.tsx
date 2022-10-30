import styled from 'styled-components';
import {MdFavoriteBorder as FavIcon} from 'react-icons/md';

export const Paper = styled.div`
  width: 60vw;

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

export const AdvertType = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 2.5vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #0D4A99;
  padding: 1vh 0vw;
`;

export const ContainerLeft = styled.div`
  width: 35vw;

  padding: 5vh 6vw;
  box-sizing: border-box;
`;

export const ContainerRight = styled.div`
  width: 25vw;
  height: 55vh;
  padding: 3vh 0vw;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  button {
    height: 4vh;
    width: 18vh;
  }
`;


export const Section = styled.div`
  display: block;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2vh;
  }

`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5vh;
  line-height: 3vh;
  color: #000000;
  margin: 1vh 0vh;
`;


export const DataSection = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vh;
  line-height: 2vh;
  color: #666666;
  margin: 1vh 0vh;
`;

export const MdFavoriteBorder = styled(FavIcon)`
  fill: #f1f1f1;
  font-size: 20px;
`;
