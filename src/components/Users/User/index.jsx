import React from 'react';
import cn from '../index.module.css';
import thumb from '../../../assets/userpic.png'
import {NavLink} from "react-router-dom";


let User = ({user, follow, unfollow, isFollowing}) => {
    return (
        <div className={cn.user__wrap}>
            <div className={cn.user__wrap_img}>
                <NavLink to={"/profile/" + user.id}><img
                    src={user.photos.small ? user.photos.small : thumb} alt={user.name}/></NavLink>
                <button className={cn.user__follow}
                        disabled={isFollowing.some(userId => (userId === user.id))} onClick={() => {
                    if (!user.followed) {
                        follow(user.id);
                    } else {
                        unfollow(user.id);
                    }
                }}> {user.followed ? 'Unfollow' : 'Follow'} </button>
            </div>
            <div className={cn.user__info}>
                <div>
                    <h5 className={cn.user__name}>{user.name}</h5>
                    <p className={cn.user__status}>{user.status}</p>
                </div>
                <div className={cn.user__location}>
                </div>
            </div>
        </div>
    );
};

export default User;