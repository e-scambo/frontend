import styled from 'styled-components';
import { AiOutlinePaperClip, FiSend } from 'react-icons/all';

export const Container = styled.div`
  margin-top: 5vh;
  width: 55vw;
  height: 5vh;
  max-height: 200px;
  background-color: #e7e7e7;
  border-radius: 10px;
  padding: 15px;
  align-self: center;
  display: flex; /* Usar flexbox */
  align-items: center; /* Centralizar verticalmente */
`;

export const InputTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  color: #000;
  background-color: transparent;
  border: none;
  resize: none;
  outline: none;

  &::placeholder {
    color: #b9b7b7;
  }
`;

export const FilesIcon = styled(AiOutlinePaperClip)`
  color: #737373;
  font-size: 5vh;
  cursor: pointer;
  margin-right: 10px;
`;

export const SendTextIcon = styled(FiSend)`
  color: #737373;
  font-size: 4vh;
  cursor: pointer;
  margin-left: 10px;
`;
