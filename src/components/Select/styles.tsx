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

export const StyledSelect = styled.select`
  width: 100%;
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
`;


export const Option = styled.option`
  border: 0px;
  background-color: transparent;

  :focus {
    border: none;
  }

  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2vh;
  line-height: 3vh;
  color: #7d7d7e;

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
