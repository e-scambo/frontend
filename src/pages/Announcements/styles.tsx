import styled from 'styled-components';

export const ListOfCards = styled.div`
  width: 30%;
  height: auto;
  display: inline-block;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FiltersBar = styled.div`
  margin: 2vh 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  align-items: center;
  color: #ffffff;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 5.8vh;
  margin-bottom: 5vh;

   @media (max-width: 768px) {
    font-size: 4vh;
    margin-bottom: 3vh;
  }
`;

export const Description = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  color: #ffffff;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 2.4vh;
  padding-left: 16vh;
  padding-right: 16vh;
  padding-bottom: 10vh;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2vh;
    padding-left: 8vh;
    padding-right: 8vh;
    padding-bottom: 6vh;
    display:none
  }
`;

export const Logo = styled.img`
  width: 15vh;
  height: 15vh;
  border-radius: 15vh;
  padding: 5vh;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  position: relative;
  margin: auto;
  margin-top: 6vh;
`;
