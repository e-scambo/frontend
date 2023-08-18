import styled from 'styled-components';
import { VscBell } from 'react-icons/all';

export const Container = styled.div`
  width: 75vw;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #B9B7B7;
`;

export const ChatHeader = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  padding: 1vh 5vh 1vh 2vh;
  align-items: center;
  background-color: #FFFFFF;
  width: 71.5vw;
  height: 10vh;
  border-bottom: 1px solid #B9B7B7;
  border-radius: 0vh 0vh 2vh 2vh;
`;

export const UserProfile = styled.div`
  width: 9vh;
  height: 9vh;
  border-radius: 100%;
  background-color: #000;
`;

export const UserName = styled.div`
  font-size: large;
  color: #000;
  margin: 0 1%;
`;

export const Online = styled.div`
  width: 1.5vh;
  height: 1.5vh;
  border-radius: 100%;
  background-color: #32FA00;
`;

export const BellIcon = styled(VscBell)`
  margin-left: auto;
  font-size: 4vh;
  color: #727171;
`; 

export const ListOfMessages = styled.div`
  margin-top: 12vh;
  margin-bottom: 15vh;
  overflow: auto;
`;
