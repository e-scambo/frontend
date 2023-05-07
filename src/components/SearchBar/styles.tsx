import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  border-radius: 8px;
  display: flex;
  align-items: center;
  position: relative;
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
  padding-left: 1.3vw;
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
  line-height: 3vh;
  color: #868484;
  border: none;
  padding-right: 11vw;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: inherit;
  }

  box-sizing: border-box;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 1.5vw;
  width: 1.8vw;
  height: 1.8vw;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  width: 1.8vw;
  height: 1.8vw;
  bottom: 14%;
`;
