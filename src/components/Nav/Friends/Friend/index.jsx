import React from 'react';
import cn from '../index.module.css';
import {NavLink} from "react-router-dom";
import {Avatar, Typography} from "antd";

const {Text} = Typography;
const Friend = ({ava, name}) => {
  return (
	<NavLink className={cn.friend} activeClassName={cn.active} to="/">
		{ava ?
			<Avatar src={ava} alt={name} size={"large"}/>
			:<Avatar size={"large"} icon={"user"}/>}
		<Text style={{color: '#fff'}}> {name}</Text>
	</NavLink>
  );
};

export default Friend;
