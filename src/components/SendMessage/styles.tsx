import styled from 'styled-components';
import { AiOutlinePaperClip, FiSend } from 'react-icons/all';

export const Container = styled.div`
  width: 55vw;
  background-color: #e7e7e7;
  border-radius: 10px;
  padding: 15px;
  align-self: center;
  display: flex;
  margin-top: auto;
  margin-bottom: 13vh;
  flex-direction: row;

  @media (max-width: 600px) {
    align-items: center;
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  height: 5vh;
  width: 3vw;
  margin-top: auto;
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  display: flex;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  color: #000;
  background-color: transparent;
  border: none;
  resize: none;
  outline: none;
  caret-color: #9400c2;

  &::placeholder {
    color: #b9b7b7;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    margin-top: 1vh;
  }

`;

export const FilesIcon = styled(AiOutlinePaperClip)`
  color: #737373;
  font-size: 5vh;
  cursor: pointer;
  margin-right: 10px;

  @media (max-width: 600px) {
    font-size: 4.5vh;
  }
`;

export const SendTextIcon = styled(FiSend)`
  color: #737373;
  font-size: 4vh;
  cursor: pointer;
  margin-left: 10px;
  margin-top: 3px;

  @media (max-width: 600px) {
    font-size: 3.5vh;
  }
`;
