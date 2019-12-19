import React, {useState, useEffect} from "react";
import cn from '../index.module.css';

const ProfileStatus = (props) => {
    let [editStatusMode, setEditStatusMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status] );

    const toggleEditStatusMode = (e) => {
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
                    <input type="text"  value={status} autoFocus={true} onBlur={toggleEditStatusMode} onChange={onChangeStatusText}/>
                    : <span onDoubleClick={toggleEditStatusMode}>{status || "Input your status..."}</span>
                : <span>{status}</span>
            }


        </div>



};

export default ProfileStatus;