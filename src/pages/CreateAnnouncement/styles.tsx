import styled from 'styled-components';

export const Paper = styled.div`
  width: 60vw;
  height: 70;
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

export const ContainerLeft = styled.div`
  width: 35vw;
  padding: 5vh 6vw;
  box-sizing: border-box;
`;

export const TitleSection = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: bold;
  font-size: 2.5vh;
  letter-spacing: 0.16px;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #0D4A99;
  padding: 0vh 0vw;
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
