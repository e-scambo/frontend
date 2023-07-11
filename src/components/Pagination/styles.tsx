import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

	border-top: 1px solid #4C0C6C;
  height: 5vh;

	margin: 5vh 18vw 5vw 18vw;	

	padding: 1vw 0vw 1vw 0vw;
`;

export const Prev = styled.button`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: larger;
  gap: 4px;
  :hover{
    cursor: pointer;
  }
`;

export const Next = styled.button`
  border: none;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: larger;
  gap: 4px;
  :hover{
    cursor: pointer;
  }
`;

export const ListOfPages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`;

export const Pages = styled.div`
  color: #4C0C6C;
  opacity: 0.5;

  :active {
    cursor: default;
    color: #4C0C6C;
  }
`;

export const Page = styled.button`
	border: none;
	margin: 0.5vw;
	background-color: white;
	color: #4C0C6C;
  font-size: large;

	:hover {
		cursor: pointer;
	}
`;
