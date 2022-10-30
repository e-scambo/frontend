import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  background: #fc8404;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerInput = styled.div`
  width: 95%;
  height: 4vh;
  background: #FFFFFF;
  border-radius: .8vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
`;

export const Input = styled.input`
  padding-left: 16px;
  flex-grow: 1;
  border-radius: 8px;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vh;
  line-height: 3vh;
  color: #7d7d7e;
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
