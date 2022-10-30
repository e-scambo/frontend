import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  color: #3d346e;
  width: 100%;
  height: 100%;
`;

interface Props {
  error: boolean
}

export const Input = styled.textarea<Props>`
  width: 100%;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vh;
  line-height: 2vh;
  color: #7d7d7e;
  border: ${(props) => props.error?
    '.1vh solid #a83a3a' : '.1vh solid #666666'};;
  resize: none;
  border-radius: 8px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:disabled {
    background-color: inherit;
  }

  margin-top: .5vh;
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
