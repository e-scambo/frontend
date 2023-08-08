import styled from 'styled-components';

interface Props {
  header?: boolean
}

export const Container = styled.div<Props>`
  padding-top: ${({header}) => header ? '9vh' : '10vh' };
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  flex: 1;
`;
