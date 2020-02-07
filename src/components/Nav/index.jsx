import React from 'react';
import cn from './index.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/FriendsContainer";
import {Icon, Menu} from "antd";

const Nav = (props) => {
    return (
        <nav className={cn.nav}>
            <Menu
                mode="inline"
                defaultSelectedKeys={[props.menuActive]}
            >
                <Menu.Item key="/profile">
                    <NavLink className={cn.item} activeClassName={cn.active} to="/profile">
                        <Icon type="user" />
                        <span>Профиль</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/dialogs">
                    <NavLink className={cn.item} activeClassName={cn.active} to="/dialogs">
                        <Icon type="mail"/>
                        <span>Диалоги</span>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="/users">
                    <NavLink className={cn.item} activeClassName={cn.active} to="/users">
                        <Icon type="solution" />
                        <span>Пользователи</span>
                    </NavLink>
                </Menu.Item>
            </Menu>
            <Friends/>
        </nav>
    );
};

export default Nav;
