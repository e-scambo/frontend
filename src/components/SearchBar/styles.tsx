import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

  /* spacing */
  left: 39.3vw;
  padding-right: 2vw;

  /* borders */
  border: none;
  box-sizing: border-box;
  border-radius: 3vw;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  background-color: #fc8404;

  /* display */
  position: absolute;
  align-items: center;
  justify-content: center;
  text-transform: none;

  font-family: 'Noto Sans', sans-serif;
  font-size: 2.3vh;
  line-height: 3vh;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;


  :hover {
    opacity: 0.8;
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
  padding-left: 1.5vw;
  font-size: 3vh;
  width: 1.8vw;
  height: 1.8vw;
`;

export const ArrowIcon = styled.img`
  position: absolute;
  padding-left: 0.3vw;
  width: 1.8vw;
  height: 1.8vw;
`;
