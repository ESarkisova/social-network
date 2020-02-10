import React from 'react';
import cn from '../index.module.css';
import {Typography} from "antd";

const { Text } = Typography;

const Message = ({text}) => {
    return (
        <div>
            <Text className={cn.messageList__from}>{text}</Text>
        </div>
    );
};

export default Message;