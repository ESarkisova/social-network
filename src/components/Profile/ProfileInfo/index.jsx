import React from 'react';
import cn from './index.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileAvatar from "./ProfileAvatar/ProfileAvatar";
import ProfileDetails from "./ProfileDetails/ProfileDetails";
import ProfileDetailsForm from "./ProfileDetails/ProfileDetailsForm";

const ProfileInfo = ({profileInfo, status, setStatus, isOwner, setAvatar, isLoadingAvatar, setProfile, showEditProfile, changeShowEditProfile, isSavingProfile}) => {

    const onSubmitEditProfileForm = (formData) => {
        setProfile(formData);
    };


    return (
        <>
            <div className={cn.info}>
                <div className={cn.infoLeft}>
                    <ProfileAvatar
                        isLoadingAvatar={isLoadingAvatar}
                        profileInfo={profileInfo}
                        isOwner={isOwner}
                        setAvatar={setAvatar} />
                    <div>
                        <h2 className={cn.name}>{profileInfo.fullName}</h2>
                        <ProfileStatus status={status} setStatus = {setStatus} isOwner = {isOwner}/>
                    </div>
                </div>
                <div className={cn.details}>
                    {showEditProfile ?  <ProfileDetailsForm
                        onSubmit={onSubmitEditProfileForm}
                        profileInfo = {profileInfo}
                        initialValues={profileInfo}
                        isSavingProfile = {isSavingProfile}/>
                        : <ProfileDetails
                            profileInfo = {profileInfo}
                            changeShowEditProfile = {changeShowEditProfile}/>}

                </div>
            </div>
        </>
    );
};

export default ProfileInfo;