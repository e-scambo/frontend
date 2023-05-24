import styled from 'styled-components';

interface Props {
  error: boolean;
}

export const Container = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  background-color: #F2F2F2;
  border-radius: 10px;
  padding: 3px;
  border: 0.35px solid #d3d3d3;
  outline: none;

  ${(props) => props.error && `
    border-color: #ff6961;
  `}
`;

export const Input = styled.input`
  width: 100%;
  height: 8vh;
  padding-right: 1.6vh;
  padding-left: 1.6vh;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 2.3vh;
  line-height: 2vh;
  background-color: #F2F2F2;
  color: #727171;
  border: #727171;
  outline: none;
  caret-color: #9400c2;

  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: inherit;
  }

  margin-top: auto;
  margin-bottom: auto;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 2vh;
  padding-top: 1vh;
  line-height: 2vh;
  color: #a83a3a;
  padding-left: 5px;
`;
