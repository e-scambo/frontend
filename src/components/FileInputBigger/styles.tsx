import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 31vw;
  height: 51vh;
  background-color: #D9D9D9;
  cursor: pointer;
  border-radius: 7px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CameraIcon = styled.img`
  width: 50%;
  height: 50%;
`;

export const HiddenInput = styled.input`
  display: none;
`;
