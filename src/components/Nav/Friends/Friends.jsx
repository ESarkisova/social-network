import React from 'react';
import cn from './index.module.css';
import Friend from "./Friend";

const Friends = ({friendList}) => {
	let friendElements = friendList.map( ({id,name,ava}) => <Friend key = {id} id={id} name={name} ava={ava}/>);
  return (
	<div className={cn.friends__wrapper}>
		{
			friendElements
		}
	</div>
  );
};

export default Friends;
