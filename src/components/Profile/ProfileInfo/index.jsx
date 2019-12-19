import React from 'react';
import cn from './index.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";

const ProfileInfo = ({profileInfo, status, setStatus, isOwner, setAvatar, isLoadingAvatar}) => {

    return (
        <>
            <div className={cn.info}>
                <ProfileAvatar
                    isLoadingAvatar={isLoadingAvatar}
                    profileInfo={profileInfo}
                    isOwner={isOwner}
                    setAvatar={setAvatar} />

                <h2 className={cn.name}>{profileInfo.fullName}</h2>
                <div className={cn.job}>
                    {profileInfo.lookingForAJob ?
                        profileInfo.lookingForAJobDescription ?
                            "Ищу работу: " + profileInfo.lookingForAJobDescription : "Ищу работу" :
                        "Не ищу работу"}
                </div>
            </div>
            <ProfileStatus status={status} setStatus = {setStatus} isOwner = {isOwner}/>
        </>
    );
};

export default ProfileInfo;