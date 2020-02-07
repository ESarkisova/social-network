import React from "react";
import cn from "../index.module.css";

const ProfileDetails = ({profileInfo, changeShowEditProfile, isOwner}) => {


        return  (
                <>
                    <div>
                        <div>{profileInfo.lookingForAJob ?
                            profileInfo.lookingForAJobDescription ?
                                "Ищу работу: " + profileInfo.lookingForAJobDescription : "Ищу работу" :
                            "Не ищу работу"}
                        </div>
                        <div>
                            <b>Обо мне: </b>{profileInfo.aboutMe }
                        </div>
                        <div>
                            <b>Контакты:</b>
                            {Object.keys(profileInfo.contacts).map((key) => {
                                return <Contact key={key} contactName={key} contactValue={profileInfo.contacts[key]}/>
                            }) }
                        </div>
                        <hr/>
                        {isOwner &&
                                <button className={cn.detailsEditButton} onClick = { () => {changeShowEditProfile(true);} }>Редактировать</button>}

                    </div>
                </>
            )




};

const Contact = ({contactName, contactValue}) => {
    return (
        <p className={cn.contactsItem}><b>{contactName}: </b>{contactValue ? <a href={contactValue}>{contactValue}</a> : ''}</p>
    );
};

export default ProfileDetails;