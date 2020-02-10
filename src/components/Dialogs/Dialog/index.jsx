import React from 'react';
import cn from '../index.module.css';
import {NavLink} from "react-router-dom";
import {Avatar, Typography} from "antd";

const {Text} = Typography;
const Dialog = ({id, ava, name}) => {
    return (
        <div>
            <NavLink to={"/dialogs/"+id} className={cn.dialogs__user}>
                {ava ?
                    <Avatar size = "large" src={ava} alt="ava" />
                    :<Avatar size="large" icon="user" />}
                <Text> {name}</Text>
            </NavLink>
        </div>
    );
};

export default Dialog;