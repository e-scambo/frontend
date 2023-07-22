import styled from 'styled-components';

export const Container = styled.div`
  height: 80vh;
  width: 10vw;
//   background-color: #f2f2f2;
  float: left;
  margin-top: 50vh;
  margin-left: 2vw;
  margin-right: 2vw;
  transform: translateY(-50%);

  /* Estilos responsivos */
  @media (max-width: 768px) {
    height: 20vh;
    width: 100%;
    float: none;
    margin-top: 0;
    transform: none;
  }
`;