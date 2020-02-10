import React from 'react';
import cn from '../index.module.css';
import thumb from '../../../assets/userpic.png'
import {NavLink} from "react-router-dom";
import {Button, Card} from "antd";


const UserAnt = ({user, follow, unfollow, isFollowing}) => {
    return (
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img src={user.photos.large ? user.photos.large : thumb} alt={user.name} />}>
            <NavLink to={"/profile/" + user.id}>
                <Card.Meta title={user.name} description={user.status} />
            </NavLink>

            <Button type={"primary"}
                    className={cn.user__follow}
                    block
                    disabled={isFollowing.some(userId => (userId === user.id))} onClick={() => {
                if (!user.followed) {
                    follow(user.id);
                } else {
                    unfollow(user.id);
                }
            }}> {user.followed ? 'Убрать из друзей' : 'Добавить в друзья'} </Button>

        </Card>
    );
};

export default UserAnt;