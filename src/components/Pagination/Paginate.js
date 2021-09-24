import React from "react";
import { PaginationContainer } from "./Pagination.styles";
import Pagination from "react-responsive-pagination";

const Paginate = ({ totalPage, changePage, page }) => {
  return (
    <PaginationContainer>
      <Pagination current={page} total={totalPage} onPageChange={changePage} />
    </PaginationContainer>
  );
};

export default Paginate;
