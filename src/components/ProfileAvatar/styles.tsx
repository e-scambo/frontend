import styled, {css} from 'styled-components';

interface Props {
  avatar?: string
}

export const Container = styled.div<Props>`
  height: 18vh;
  width: 18vh;
  background-color: #C6C6C6;;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    font-size: 3.5vh;
    fill: #ffffff;
    margin-left: auto;
    margin-right: auto;
  }

  :hover {
    opacity: .5;
    transition: ease-in 0.2s;
    cursor: pointer;
  }

  ${(props) =>
    props.avatar &&
    css`
      background: url(${props.avatar});
      background-size: cover;
    `}
`;


export const InputImage = styled.input`
  width: 18vh;
  height: 18vh;
  position: fixed;
  opacity: 0;
  z-index: 2;
`;
