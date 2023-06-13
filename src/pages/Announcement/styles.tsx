import styled from 'styled-components';
import {MdFavoriteBorder as FavIcon} from 'react-icons/md';

export const Paper = styled.div`
  width: 80vw;
  height: 90vh;
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0rem .2rem .2vw rgba(75, 75, 75, 0.12);
  border-radius: .5rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 9vh;
  padding-top: 2vh;
  align-items: center;

  border-bottom: 2px solid #CCCCCC;
  border-left: 1px solid #CCCCCC;
  border-right: 1px solid #CCCCCC;

  @media (max-width: 800px) {
    flex-direction: column;

`;

export const AdvertType = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 5.2vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #4C0C6C;
  padding: 1vh 0vw;
`;

export const ContainerLeft = styled.div`
  width: 55vw;
  box-sizing: border-box;
  align-self: flex-start;
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export const ContainerRight = styled.div`
  width: 45vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-top: 9vh;

  button {
    height: 4vh;
    width: 18vh;
  }
  @media (max-width: 800px) {
    width: 80vw;
  }
`;

export const ContainerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding-left: 3.5vw;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;


export const Section = styled.div`
  display: block;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2vh;
  }

`;

export const ImagesSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 1.7vw;
  justify-content: space-between;
`;

export const SmallSection = styled.div`
  width: 6vw;
  height: 12vh;
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  &:not(:first-child) {
    margin-top: 3vh;
  }
`;

export const BigSection = styled.div`
  width: 24vw;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
 
  @media (max-width: 800px) {
    width: 20vw;
    img {
      position: absolute;
      width: 46%;
      top: 0%;
      height: 134px;}
  }
`;

export const ColumnSection = styled.div`
  width: 6vw;
  display: flex;
  flex-direction: column;
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2.6vh;
  line-height: 3vh;
  padding-top: 2.9vh;
  color: #4C0C6C;
  margin: 1vh 0vh;
`;


export const DataSection = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 2.4vh;
  line-height: 2vh;
  color: #666666;
  margin: 1vh 0vh;
`;

export const DataSectionTitle = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 5.2vh;
  line-height: 1vh;
  color: #4C0C6C;
  margin: 1vh 0vh;
`;

export const DataSectionLocalization = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: lighter;
  font-size: 2vh;
  line-height: 1vh;
  color: #727171;
  margin: 1vh 0vh;
`;

export const ContainerButton = styled.div`
  width: 30vw;
  background: #FFFFFF;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding-top: 4.7vh;
  gap: 1rem;
  margin: auto;

  button {
    height: 11vh;
    width: 15vw;;
    margin: 0 auto;
    border-radius: 50px;
  }

  @media (max-width: 426px) {
    width: 30vw;
    height: 100vh;
    flex-direction: column;
  }
}
`;


export const MdFavoriteBorder = styled(FavIcon)`
  fill: #4C0C6C;
  font-size: 20px;
`;
