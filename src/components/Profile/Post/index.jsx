import React from 'react';
import cn from './index.module.css';
import {Avatar, Typography} from "antd";

const { Text } =  Typography;

const Post = ({ava, text}) => {

    return (
        <div className={cn.post}>
            { cn.ava ?
                <Avatar  size="large"  src={ava} alt="" />
            : <Avatar size="large" icon="user" />}
            <Text>{text}</Text>
        </div>
    );
};

export default React.memo(Post);