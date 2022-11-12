import styled from 'styled-components';

export const Container = styled.div`
  /* size */
  width: 80vw;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 1.5vh;


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
