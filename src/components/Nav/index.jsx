import React from 'react';
import cn from './index.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/FriendsContainer";

const Nav = (props) => {
  return (
	<nav className={cn.nav}>
		<div>
			<NavLink className={cn.item} activeClassName={cn.active} to="/profile">Профиль</NavLink>
			<NavLink className={cn.item} activeClassName={cn.active} to="/dialogs">Диалоги</NavLink>
			<NavLink className={cn.item} activeClassName={cn.active} to="/users">Пользователи</NavLink>
		</div>
		<Friends/>
	</nav>
  );
};

export default Nav;
