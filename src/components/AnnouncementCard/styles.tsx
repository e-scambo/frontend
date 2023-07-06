import styled from 'styled-components';
import {BiImageAlt as noImage} from 'react-icons/bi';


export const Paper = styled.div`
  display: block;
  margin: 0.5vw;
  background: #FFFFFF;
  padding: 2vh;
  border: 1.5px solid #B9B7B7;
  border-radius: 8px;
  min-height: 16vh;
  @media (max-width: 426px) {
    width: 70vw;
  }
`;

export const Grid = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  grid-template-columns: 10vw 35vw;
  grid-template-rows: 3vh 3vh 1fr 1fr;
  box-sizing: border-box;
  max-width: 280px;

  @media (max-width: 426px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding-bottom: 2vh;
  }
`;


export const Picture = styled.img`
  background-size: cover;
  align-self: center;
  justify-self: center;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;

  box-sizing: border-box;
  background-color: #F2F2F2;
  cursor: pointer;

  width: 100%;
  height: 350px;
  object-fit: fill;

  display: flex;

`;


export const Title = styled.div`
  margin-top: 1vh;
  cursor: pointer;
  font-family: 'Noto Sans' sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 3vh;
  color: #4C0C6C;
`;

export const Localization = styled.div`
  margin-top: 1vh;
  align-self: start;
  justify-self: start;

  font-family: 'Noto Sans', sans-serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 2vh;
  line-height: 2vh;
  color: #C6C6C6;

  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    margin-right: 5px;
    font-size: 2.5vh;
  }
`;


export const Description = styled.p`
  margin-top: 1vh;
  font-family: 'Noto Sans', sans-serif ;
  font-style: normal;
  font-weight: normal;
  font-size: 2vh;
  line-height: 2vh;
  color: #727171;
  height: 4vh;

  max-width: 60ch;
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  word-break: break-word;
`;

export const BiImageAlt = styled(noImage)`
  font-size: 32px;
  fill: #A5A5A5;
`;
