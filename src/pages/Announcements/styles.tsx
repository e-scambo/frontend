import styled from 'styled-components';

import {AiOutlineDown} from 'react-icons/ai';

export const ListOfCards = styled.div`
  padding-right: 6.6%;
  padding-left: 6.6%;
  width: 67vw;
  display: flex;
  flex-wrap: wrap;
`;

export const FiltersBar = styled.div`
  margin: 2vh 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  div {
    border: 1px solid gray;
    border-radius: 3px;
    width: 8vw;
    &:not(:last-child) {
      margin-right: 1vw;
    }
  }
`;

export const Title = styled.div`
  justify-content: center;
  display: flex;
  color: #ffffff;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 5.8vh;
  margin-bottom: 18vh;
  margin-top: 10vh;

   @media (max-width: 768px) {
    font-size: 4vh;
    margin-bottom: 3vh;
  }
`;

export const BotaoOverlay = styled.button`
  display: flex;

  position: relative;
  margin-left: auto;

  align-items: center;
  align-content: center;
  gap: 10px;
  justify-self: right;
  font-size: 3vh;
  line-height: 3vh;

  margin-top: 3%;
  margin-bottom: 3%;

  :hover {
    opacity: 0.8;
    border: none;
    cursor: pointer;
  }

  background-color: #ffffff;
  border: none;
`;

export const OrdenarOverlay = styled.div`
  display: block;
  width: 100%;
`;

export const OutlineDownIcon = styled(AiOutlineDown)`
  color: #000;
  font-size: 2vh;

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
