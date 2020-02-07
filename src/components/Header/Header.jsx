import React from 'react';
import cn from './index.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.svg"

const Header = (props) => {
  return (
    <div className={cn.header}>
        <div>
            <img src={logo} alt="logo"/>
            <h1><strong>SOCIAL</strong><span className={cn.small}> NETWORK</span></h1>
        </div>
    	<div>
            {props.isAuth ?  <span onClick={props.delAuth} className={cn.link}>Выйти, {props.login}</span> : <NavLink to='/login' className={cn.link}> Войти </NavLink>}
        </div>
    </div>
  );
};

export default Header;
