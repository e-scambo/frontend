import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  color: #3d346e;
  width: 100%;
`;

interface RadioProps {
  error: string | undefined
}

export const Radio = styled.input<RadioProps>`
  border: 0px;
  background-color: transparent;

  outline: none;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vh;
  line-height: 3vh;
  color: #7d7d7e;

  margin-top: .5vh;
  margin-bottom: .5vh;
  box-sizing: border-box;

  input:checked:after {
    background-color: #A5A5A5;
    border: ${({error}) => error && '1px solid #a83a3a'};

  }
`;


export const Option = styled.div`
  input {
    margin-right: .2vw
  }

  &:not(:last-child) {
    margin-right: .5vh;
  }
`;

export const RadioLabel = styled.label`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vh;
  line-height: 3vh;
  color: #7d7d7e;
`;

export const RadioGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
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
