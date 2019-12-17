import React from 'react';
import cn from '../index.module.css';
import {NavLink} from "react-router-dom";

const Dialog = ({id, ava, name}) => {
    return (
        <div>
            <NavLink to={"/dialogs/"+id} className={cn.dialogs__nameActive}>
                <img src={ava} alt="ava" className={cn.dialogs__avatar}/>
                {name}
            </NavLink>
        </div>
    );
};

export default Dialog;