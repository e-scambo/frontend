import styled from 'styled-components';

interface Props {
  header?: boolean
}

export const Container = styled.div<Props>`
  padding-top: ${({header}) => header ? '15vh' : '10vh' };
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
`;
