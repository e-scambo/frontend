import styled from 'styled-components';

export const StyledButton = styled.button`
  /* size */
  width: 100%;
  height: 9vh;

  /* spacing */
  padding-left: .4vh;

  /* borders */
  border: none;
  box-sizing: border-box;
  border-radius: 8px;

  /* effects */
  cursor: pointer;
  transition-duration: 0.5s;

  background-color: #4e096b;

  /* display */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  font-family: 'Noto Sans', sans-serif;
  font-size: 2.3vh;
  line-height: 2vh;
  font-style: normal;
  font-weight: 600;
  color: #FFFFFF;


  :hover {
    opacity: 0.8;
  }

  transition: 0.3s;
`;

export const ContainerGrid = styled.div`
  margin: .1vh 0vh;
  width: 100%;
  height: 100%
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;


  svg {
    margin-left: .5vw;
    margin-right: .5vw;
  }
`;
