import React from 'react';
import cn from '../index.module.css';

const Message = ({text}) => {
    return (
        <div>
            <div className={cn.messageList__from}>{text}</div>
        </div>
    );
};

export default Message;