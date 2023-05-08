import styled from 'styled-components';

export const Container = styled.div`
  /* size */
  flex-direction: column ;
  width: 80vw;
  display: flex;


  @media (max-width: 2500px) {
    width: 60vw;
  }

  @media (max-width: 2200px) {
    width: 75vw;
  }

  @media (max-width: 1600px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 95vw;
  }
`;
