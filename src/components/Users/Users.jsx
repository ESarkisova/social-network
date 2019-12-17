import React from 'react';
import User from "./User";
import Preloader from "../common/Preloader";
import Pagination from "../common/Pagination/Pagination";

let Users = (props) => {
    return (
        <>
            {props.isLoading ? <Preloader/> : null}
            <Pagination userCount = {props.userCount} pageSize = {props.pageSize} currentPage = {props.currentPage} setPage={props.setPage}/>
            {props.userList.map(u => (<User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} isFollowing = {props.isFollowing}/>))}
        </>

    )
};

export default Users;