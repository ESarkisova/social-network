import React from 'react';
import cn from './index.module.css';
import {Spin} from "antd";

let Preloader = () => {
    return (
        <div className={cn.preloader__wrap}>
            <Spin size="large"/>
        </div>
    );
};

export default Preloader;