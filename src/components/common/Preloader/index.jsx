import React from 'react';
import cn from './index.module.css';

let Preloader = () => {
    return (
        <div className={cn.preloader__wrap}>
            <div className={cn.preload__circle}></div>
            <div className={`${cn.preload__circle} ${cn.preload__circle2}`}></div>
        </div>
    );
};

export default Preloader;