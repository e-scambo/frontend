import styled from 'styled-components';

interface Props {
  error: boolean
}

export const Container = styled.div<Props>`
  display: block;
  color: #3d346e;
  border-bottom: ${(props) => props.error?
    '.1vh solid #a83a3a' : '.1vh solid #666666'};
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  width: 100%;
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

  margin-top: auto;
  margin-bottom: auto;
  box-sizing: border-box;
`;

export const Label = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.3vh;
  line-height: 1vh;
  color: #000000;
  margin: .5vh 0vh;
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
