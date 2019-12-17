import React from 'react';
import cn from './index.module.css';
import ProfileStatus from "./ProfileStatus";
import noAvatarImage from "../../../assets/userpic.png";

const ProfileInfo = ({profileInfo, status, setStatus}) => {
    return (
        <>
            <div className={cn.info}>
                <div className={cn.ava}>
                    <img src={profileInfo.photos.large ? profileInfo.photos.large : noAvatarImage} alt={profileInfo.fullName}/>
                </div>
                <h2 className={cn.name}>{profileInfo.fullName}</h2>
                <div className={cn.job}>
                    {profileInfo.lookingForAJob ?
                        profileInfo.lookingForAJobDescription ?
                            "Ищу работу: " + profileInfo.lookingForAJobDescription : "Ищу работу" :
                        "Не ищу работу"}
                </div>
            </div>
            <ProfileStatus status={status} setStatus = {setStatus}/>
        </>
    );
};

export default ProfileInfo;