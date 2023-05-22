import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  height: 10vh;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
  margin: auto;

  @media (max-width: 768px) {
    width: 70%;
    height: 8vh;
    border-radius: 6px;
  }
`;

// export const ContainerInput = styled.div`
//   width: 95%;
//   height: 4vh;
//   border-radius: .8vh;
//   display: flex;
//   align-items: center;
// `;

export const ButtonOrange = styled.button`
  width: 10vw;
  height: 5vh;

  /* borders */
  border: none;
  border-radius: 3vw;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  background-color: #fc8404;

  /* display */
  position: absolute;
  right: 0.5vw;
  text-transform: none;

  font-family: 'Noto Sans', sans-serif;
  font-size: 2.3vh;
  line-height: 3vh;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;
  text-align: left;
  padding-left: 1.5vw;
  padding-right:  1.3vw;

  justify-content: center;

  :active {
    border: none;
  }

  :hover {
    opacity: 0.8;
    border: none;
  }

  transition: 0.3s;
  @media (max-width: 768px) {
    width: 60%;
    height: 3.5vh;
    font-size: 1.6vh;
    border-radius: 3vw;
    right: 0vw;
    padding-left: 0vw;
    padding-right: 0vw;
  }
`;

export const Input = styled.input`
  padding: 1vw 1vw 1vw 4vw;
  background-color: #F0F0F0;
  flex-grow: 1;
  border-radius: 2vw;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2vh;
  line-height: 2vh;
  color: #868484;
  border: none;
  padding-right: 1vw;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: inherit;
  }

  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 0vw 0vw 0vw 0vw;
    font-size: 2vh;
    border-radius: 2vw;
    padding-right: 1vw;
    width: 45vw;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 1.5vw;
  width: 1.8vw;
  height: 1.8vw;
  @media (max-width: 768px) {
    left: 3vw;
    width: 4vw;
    height: 4vw;
  }
`;

export const ArrowIcon = styled.img`
  position: absolute;
  width: 1.8vw;
  height: 1.8vw;
  right: 7%;
  bottom: 14%;

  @media (max-width: 768px) {
    width: 4vw;
    height: 4vw;
    right: 4vw;
    bottom: 8vw;
  }
`;
