import cn from './index.module.css';
import React from "react";

let Pagination = ({userCount, pageSize, currentPage, setPage}) => {
    let pageCount = Math.ceil(userCount / pageSize);
    let pageArr = [];
    for (let i = 1; i <= pageCount; i++) {
        pageArr[i] = i;
    }
    return (
        <div className={cn.pagination__wrap}>
            {pageArr.map(pageNum => (<span key={pageNum}
                                           className={`${cn.pagination__item} ${pageNum === currentPage ? cn.pagination__item_current : ''}`}
                                           onClick={() => pageNum !== currentPage ? setPage(pageNum) : null}>{pageNum}</span>))}
        </div>
    )
};

export default Pagination;