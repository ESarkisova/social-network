import React from 'react';
import cn from './index.module.css';

const Post = ({ava, text}) => {

    return (
        <div className={cn.post}>
            <div className={cn.ava}>
                <img src={ava} alt=""/>
            </div>
            <div className={cn.post}>{text}</div>
        </div>
    );
};

export default React.memo(Post);