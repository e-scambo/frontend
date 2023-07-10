import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

	border-top: 1px solid #4C0C6C;
  height: 5vh;

	margin: 5vh 20vw 5vw 20vw;	

	padding: 1vw 0vw 1vw 0vw;
`;

export const Prev = styled.button`

`;

export const Next = styled.button`

`;

export const ListOfPages = styled.div`
display: flex;
align-items: center;
justify-content: center;

`;

export const Pages = styled.div`

	`;

export const Page = styled.button`
	border: none;
	margin: 0.5vw;
	background-color: white;
	color: #4C0C6C;

	:hover {
		cursor: pointer;
	}

	:active {
		color: #4C0C6C;
	}

`;
