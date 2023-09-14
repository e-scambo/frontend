import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  width: 10vw;
  background-color: gray;
  // background-color: #f2f2f2;
  margin-right: 2vw;
  
  @media (max-width: 768px) {
    margin-right: none;
    margin-top: 2vh;
    height: 10vh;
    width: 80vw;
  }
`;