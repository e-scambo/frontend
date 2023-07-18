import React from "react";
import { Container } from "./styles";
import { Prev, Next, ListOfPages, Pages, Page } from "./styles";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";


interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
		<Container>
			<Prev><BsArrowLeft size={24}/>Anterior</Prev>
				<ListOfPages>
					{pageNumbers.map((pageNumber) => (
						<Pages
							key={pageNumber}
							className={pageNumber === currentPage ? 'active' : 'disable'}
						>
							<Page onClick={() => onPageChange(pageNumber)}>{pageNumber}</Page>
						</Pages>
					))}
				</ListOfPages>
			<Next>Próximo<BsArrowRight size={24}/></Next>
    </Container>
  );
};

export default Pagination;
