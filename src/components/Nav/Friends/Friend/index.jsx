import React from 'react';
import cn from '../index.module.css';
import {NavLink} from "react-router-dom";

const Friend = ({ava, name}) => {
  return (
	<NavLink className={cn.friend} activeClassName={cn.active} to="/">
		<img src={ava} alt={name} className={cn.friend__ava}/>
		<span className={cn.friend__name}>{name}</span>
	</NavLink>
  );
};

export default Friend;
