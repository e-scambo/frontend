import styled from 'styled-components';

export const ListOfCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FiltersBar = styled.div`
  margin: 2vh 0px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  div {
    border: 1px solid gray;
    border-radius: 3px;
    width: 8vw;
    &:not(:last-child) {
      margin-right: 1vw;
    }
  }
`;
