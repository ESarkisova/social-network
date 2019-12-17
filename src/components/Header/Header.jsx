import React from 'react';
import cn from './index.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={cn.header}>
    	<img src="https://css-tricks.com/wp-content/uploads/2015/05/kiwi.svg" alt="logo"/>
    	<div>
            {props.isAuth ?  <span onClick={props.delAuth} className={cn.link}>Выйти, {props.login}</span> : <NavLink to='/login'> Login </NavLink>}
        </div>
    </div>
  );
};

export default Header;
