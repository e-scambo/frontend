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
  padding-right: 8vh;
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
  font-size: 1vh;
  line-height: 2vh;
  color: #a83a3a;
  padding-left: 5px;
`;

export const EmailIcon = styled.img`
  position: absolute;
  top: 30%;
  left: 92%;
  width: 1.8vw;
  height: 1.8vw;
`;
