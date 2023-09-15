import styled from 'styled-components';
import {BiImageAlt as noImage} from 'react-icons/bi';


export const Paper = styled.div`
  display: flex;
  justify-content: center;
  width: 19.48vw;
  margin: 0.87vw;
  background: #FFFFFF;
  padding: 2vh;
  border: 1.5px solid #B9B7B7;
  border-radius: 8px;
  min-height: 16vh;

  /* Desktops e telas grandes */
  @media (min-width: 1200px) {
  }

  /* Telas pequenas e laptops */
  @media (min-width: 1024px) {
  }

  /* IPads e tablets */
  @media (min-width: 768px) {
  }

  /* Dispositivos Mobile */
  @media (min-width: 480px) {
  }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
  grid-template-columns: 10vw 35vw;
  grid-template-rows: 3vh 3vh 1fr 1fr;
  box-sizing: border-box;
  max-width: 280px;
  @media (max-width: 426px) {
    justify-content: space-between;
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
  height: 269px;
  object-fit: cover;

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
