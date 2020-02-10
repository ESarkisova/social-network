import React from "react";
import cn from "../index.module.css";
import {Button, Divider, Typography} from 'antd';

const {Text} = Typography;

const ProfileDetails = ({profileInfo, changeShowEditProfile, isOwner}) => {

    return (
        <>
            <div>
                <div>{profileInfo.lookingForAJob ?
                    profileInfo.lookingForAJobDescription ?
                        <><Text strong>Ищу работу: </Text><Text>{profileInfo.lookingForAJobDescription}</Text></>
                        : <Text strong> Ищу работу</Text>
                    : <Text strong> Не ищу работу </Text>}
                </div>
                <div>
                    <Text strong>Обо мне: </Text><Text>{profileInfo.aboutMe}</Text>
                </div>
                <div>
                    <Text strong>Контакты:</Text>
                    {Object.keys(profileInfo.contacts).map((key) => {
                        return <Contact key={key} contactName={key} contactValue={profileInfo.contacts[key]}/>
                    })}
                </div>
                <Divider/>
                {isOwner &&
                <Button type={"primary"} className={cn.detailsEditButton} onClick={() => {
                    changeShowEditProfile(true);
                }}>Редактировать</Button>}

            </div>
        </>
    )


};

const Contact = ({contactName, contactValue}) => {
    return (
        <p className={cn.contactsItem}><Text code>{contactName}: </Text>{contactValue ?
            <Button type="link" href={contactValue}>{contactValue}</Button> : ''}</p>
    );
};

export default ProfileDetails;