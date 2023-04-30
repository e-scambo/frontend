import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Principal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100vh;
  width: 100vw;

  @media (max-width: 426px) {
    flex-direction: column-reverse;
  }
`;

export const Carousel = styled.div`
  height: 100vh;
`;

export const ContainerLoginForm = styled.div`
  width: 50%;
  height: 100vh;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0vh 14vh 14vh 14vh;
  
  @media (max-width: 426px) {
    width: 100%;
    height: 45vh;
    
  }
`;

export const ContainerTitle = styled.div`
  width: 100%;
  height: 25vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const ContainerFields = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    &:not(:first-child) {
      margin-top: 2vh;
    }
  }
`;

export const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 800;
  font-size: 23px;
  color: #4E096B;
  height: 20%;

`;

export const Description = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  color: #B9B7B7;
  height: 15%
  text-align: center;
  padding-top: 10vh;
  padding-left: 5px;
`;

export const Linked = styled.a`
  color: #4E096B;
  cursor: pointer;
  text-decoration: none;
  a:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }
`;

export const Button = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`;

export const InfoText = styled.div`
  position: relative;
  top: -10px;
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 2vh;
  line-height: 2vh;
  color: #727171;
  display: inline;

  a {
    margin-left: .3vw;
  }
`;

export const Redirect = styled(Link)`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 2.4vh;
  line-height: 2vh;
  color: #4C0C6C;
  cursor: pointer;
  &:hover{
    opacity: 0.8;
    transition: 300ms ease-in;
  }
`;
/* * {
  box-sizing: border-box;
}

.conteiner {
  display: flex;
}

.divForm {
  width: 45vw;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.divForm * {
  margin: auto;
}

a {
  text-decoration: none;
}

main {
  width: 69%;
  margin-bottom: 2em;
}

footer {
  max-width: 90%;
  margin: auto;
} */
