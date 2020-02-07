import cn from './index.module.css';
import classNames from "classnames";
import React from "react";

const PREV_ARROW = '<',
    NEXT_ARROW = '>',
    SPACE_SYMBOL = '...';

const getPagination = (currentPage, allPages, posPagin) => {
    let pagination = [];

    if (posPagin >= allPages) {
        for (let i = 1; i <= allPages; i++) {
            pagination[i] = i;
        }
    } else {
        if (currentPage > allPages / 2) {
            if (currentPage < allPages - (posPagin - 3)) {
                pagination[1] = 1;
                pagination[2] = SPACE_SYMBOL;
                let startPos = currentPage - Math.floor((posPagin - 2) / 2);
                for (let i = 3; i <= posPagin; i++) {
                    pagination[i] = startPos;
                    startPos++;
                }
                pagination[posPagin + 1] = SPACE_SYMBOL;
                pagination[posPagin + 2] = allPages;
            } else {
                pagination[1] = 1;
                pagination[2] = SPACE_SYMBOL;
                let startPos = allPages - (posPagin - 2);
                for (let i = 3; i <= posPagin + 1; i++) {
                    pagination[i] = startPos;
                    startPos++;
                }
            }
        } else {
            if (currentPage < posPagin - 2) {
                for (let i = 1; i <= posPagin - 2; i++) {
                    pagination[i] = i;
                }
                pagination[posPagin - 1] = SPACE_SYMBOL;
                pagination[posPagin] = allPages;
            } else {
                pagination[1] = 1;
                pagination[2] = SPACE_SYMBOL;
                let startPos = currentPage - Math.floor((posPagin - 2) / 2);
                for (let i = 3; i <= posPagin; i++) {
                    pagination[i] = startPos;
                    startPos++;
                }
                pagination[posPagin + 1] = SPACE_SYMBOL;
                pagination[posPagin + 2] = allPages;
            }
        }
    }

    if (currentPage !== 1) pagination.unshift(PREV_ARROW);
    if (currentPage !== allPages) pagination.push(NEXT_ARROW);


    return pagination;
};

let Pagination = ({userCount, pageSize, paginationPageSize, currentPage, setPage}) => {
    let pageCount = Math.ceil(userCount / pageSize);
    let pageArr = getPagination(currentPage, pageCount, paginationPageSize);
    /*    let pageArr = [];
       for (let i = 1; i <= pageCount; i++) {
            pageArr[i] = i;
        }*/
    return (
        <div className={cn.pagination__wrap}>
            {pageArr.map((pageNum, index) => {
                if (pageNum === PREV_ARROW) {
                    return <span key={index}
                                 className={classNames(cn.pagination__item)}
                                 onClick={() => setPage(currentPage - 1)}>{pageNum}</span>
                } else if (pageNum === NEXT_ARROW) {
                    return <span key={index}
                                 className={classNames(cn.pagination__item)}
                                 onClick={() => setPage(currentPage + 1)}>{pageNum}</span>
                } else if (pageNum === SPACE_SYMBOL) {
                    return <span key={index}
                                 className={classNames(cn.pagination__item, cn.pagination__space)}>{pageNum}</span>
                } else {
                    return <span key={index}
                                 className={classNames(cn.pagination__item, {[cn.pagination__item_current]: pageNum === currentPage})}
                                 onClick={() => pageNum !== currentPage ? setPage(pageNum) : null}>{pageNum}</span>
                }
            })}
        </div>
    )
};

export default Pagination;