import React, {useState, useEffect} from "react";
import cn from '../index.module.css';
import {Input, Typography} from "antd";

const { Text } = Typography;

const ProfileStatus = (props) => {
    let [editStatusMode, setEditStatusMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const toggleEditStatusMode = () => {
        if(editStatusMode) {
            props.setStatus(status)
        }
        setEditStatusMode(!editStatusMode);

    };
    const onChangeStatusText = (e) => {
        setStatus(e.currentTarget.value);
    };


        return <div className={cn.status}>
            {props.isOwner?
                editStatusMode ?
                    <Input type="text"  value={status} autoFocus={true} onBlur={toggleEditStatusMode} onChange={onChangeStatusText}/>
                    : <Text strong onDoubleClick={toggleEditStatusMode}>{status || "Input your status..."}</Text>
                : <Text strong>{status}</Text>
            }


        </div>



};

export default ProfileStatus;