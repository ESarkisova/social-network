import React from "react";
import cn from '../index.module.css';
import noAvatarImage from "../../../../assets/userpic.png";
import addPhoto from "../../../../assets/addPhoto.svg";

const ProfileAvatar = ({isLoadingAvatar, profileInfo, isOwner, setAvatar}) => {
    const changeAvatar = (e) => {
        if(e.currentTarget.files.length) {
            setAvatar(e.currentTarget.files[0]);
        }
    };

        return  (
                <div className={cn.ava+' '+ (isLoadingAvatar ? cn.loading : '')}>
                    <img src={profileInfo.photos.large ? profileInfo.photos.large : noAvatarImage} alt={profileInfo.fullName}/>
                    {isOwner && <label className={cn.inputFile}>
                        <input type="file" accept="image/*" onChange={changeAvatar}/>
                        <img src={addPhoto} alt="Add photo"/>
                    </label>}
                </div>
            )




};

export default ProfileAvatar;