import styled from 'styled-components';
import {MdOutlineChat as IconChat} from 'react-icons/md';
import {BiImageAlt as noImage} from 'react-icons/bi';


export const Paper = styled.div`

  background: #FFFFFF;
  box-shadow: 0px 3px 5px  rgba(132, 130, 130, 0.15);
  border-radius: 8px;
  width: 45vw;
  min-height: 16vh;
  &:not(:last-child) {
    margin-bottom: 1.5vh;
  }
  @media (max-width: 426px) {
    width: 70vw;
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 10vw 35vw;
  grid-template-rows: 3vh 3vh 1fr 1fr;
  box-sizing: border-box;

  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 35vh;
    padding-bottom: 2vh;
  }
`;


export const Picture = styled.img`

  grid-column: 1 / 2;
  grid-row: 1 / 5;
  align-self: center;
  justify-self: center;

  display: flex;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  background-color: #F2F2F2;
  cursor: pointer;

  width: 100%;
  height: 15vh;

  display: flex;

`;


export const Title = styled.div`
  align-self: center;
  cursor: pointer;
  padding-left: 1vw;
  font-family: 'Noto Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5vh;
  color: #000000;
`;

export const Localization = styled.div`
  align-self: start;
  justify-self: start;
  padding-left: 1vw;

  font-family: 'Noto Sans', sans-serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vh;
  line-height: 2vh;
  color: #C6C6C6;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 1.5vh;
  }
`;


export const Description = styled.div`
  align-self: center;
  padding-left: 1vw;
  font-family: 'Noto Sans', sans-serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 1.5vh;
  line-height: 2vh;
  color: #000000;
`;

export const CardActions = styled.div`
  justify-self: start;
  align-self: center;
  padding-left: 1vw;
  display: flex;
  flex-direction: row;

  button {
    width: 15vw;
    height: 4vh;
    &:not(:last-child) {
      margin-right: 1vw;
    }

  }
  @media (max-width: 426px) {
    button {
      width: 25vw;
    }
  }
`;


export const MdOutlineChat = styled(IconChat)`
  fill: #FFFFFF;
  font-size: 20px;
`;

export const BiImageAlt = styled(noImage)`
  font-size: 32px;
  fill: #A5A5A5;
`;
