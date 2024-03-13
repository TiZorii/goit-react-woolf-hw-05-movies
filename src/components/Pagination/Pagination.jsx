import { PaginationWrap, PageBtn } from './Pagination.styled';

import {
  GrNext,
  GrPrevious,
  GrChapterNext,
  GrChapterPrevious,
} from 'react-icons/gr';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxPageButtons = 10;
  let startPage, endPage;

  if (totalPages <= maxPageButtons) {
    // Less than maxPageButtons total pages so show all
    startPage = 1;
    endPage = totalPages;
  } else {
    // More than maxPageButtons total pages so calculate start and end pages
    const maxPagesBeforeCurrentPage = Math.floor(maxPageButtons / 2);
    const maxPagesAfterCurrentPage = Math.ceil(maxPageButtons / 2) - 1;
    if (currentPage <= maxPagesBeforeCurrentPage) {
      // Near the start of the page range
      startPage = 1;
      endPage = maxPageButtons;
    } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
      // Near the end of the page range
      startPage = totalPages - maxPageButtons + 1;
      endPage = totalPages;
    } else {
      // Somewhere in the middle
      startPage = currentPage - maxPagesBeforeCurrentPage;
      endPage = currentPage + maxPagesAfterCurrentPage;
    }
  }

  for (let page = startPage; page <= endPage; page++) {
    pageNumbers.push(page);
  }

  return (
    <PaginationWrap>
      {currentPage > 1 && (
        <>
          <PageBtn onClick={() => onPageChange(1)}>
            <GrChapterPrevious />
          </PageBtn>
          <PageBtn onClick={() => onPageChange(currentPage - 1)}>
            <GrPrevious />
          </PageBtn>
        </>
      )}
      {pageNumbers.map(page => (
        <PageBtn
          key={page}
          disabled={page === currentPage}
          className={`page-item ${page === currentPage ? 'active' : ''}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageBtn>
      ))}
      {currentPage < totalPages && (
        <>
          <PageBtn onClick={() => onPageChange(currentPage + 1)}>
            <GrNext />
          </PageBtn>
          <PageBtn onClick={() => onPageChange(totalPages)}>
            <GrChapterNext />
          </PageBtn>
        </>
      )}
    </PaginationWrap>
  );
};

export default Pagination;
