import React from "react";
import {Pagination} from "antd";



const PaginationElement = ({userCount, pageSize, paginationPageSize, currentPage, setPage}) => {
    return <Pagination
        defaultCurrent={currentPage}
        total={userCount}
        pageSize={pageSize}
        onChange={(pageNumber) => pageNumber !== currentPage ? setPage(pageNumber) : null} />
};

export default PaginationElement;