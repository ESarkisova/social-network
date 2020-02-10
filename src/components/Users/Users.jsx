import React from 'react';
import User from "./User";
import Preloader from "../common/Preloader";
import Pagination from "../common/Pagination/Pagination";
import cn from './index.module.css';

let Users = (props) => {
    return (
        <>
            {props.isLoading ? <Preloader/> : null}
            <div className={cn.pagination__wrap}>
                <Pagination
                    userCount = {props.userCount}
                    pageSize = {props.pageSize}
                    paginationPageSize = {props.paginationPageSize}
                    currentPage = {props.currentPage}
                    setPage={props.setPage}/>
            </div>

            <div className={cn.users__wrap}>
                {props.userList.map(u => (<User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} isFollowing = {props.isFollowing}/>))}
            </div>
        </>

    )
};

export default Users;