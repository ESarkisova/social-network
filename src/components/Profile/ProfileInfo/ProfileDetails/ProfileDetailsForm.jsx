import React from "react";
import {createField, InputField, TextareaField} from "../../../common/FormComponents/FormComponents";
import cnFormControl from "../../../common/FormComponents/index.module.css";
import {reduxForm} from "redux-form";
import cn from "../index.module.css";
import {required} from "../../../common/validate/validate";
import {Button, Divider, Typography} from 'antd';

const {Text} = Typography;

const ProfileDetailsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={props.isSavingProfile ? cn.loading : ''}>
            <div className={cn.fieldWrap}>
                <Text strong>Полное имя: </Text>
                {createField("fullName",InputField, "Введите имя...",[required],{type: "text"})}</div>
            <div className={cn.fieldWrap}>
                <Text strog>Обо мне: </Text>
                {createField("aboutMe",TextareaField, "Напишите кратко о себе...",[required],)}</div>
            <div className={cn.fieldWrap}>
                <Text strong>Ищу работу: </Text>
                {createField("lookingForAJob",InputField, "",[],{type: "checkbox"})}</div>
            <div className={cn.fieldWrap}>
                <Text strong>Ищу работу - описание: </Text>
                {createField("lookingForAJobDescription",TextareaField, "Укажите профессиональные навыки...",[required],)}</div>
            <Text strong>Контакты: </Text><br/>
            <div className={cn.fieldWrap}>
                {Object.keys(props.profileInfo.contacts).map((key) => {
                    return <Contact key = {key} contactName = {key} />
                })}
            </div>
            {props.error &&
            <ul className = {cnFormControl.errorMessage}>
                {props.error}
            </ul>
            }

            <Divider/>

            <Button type={"primary"} htmlType={"submit"} className={cn.detailsEditButton}>Сохранить</Button>
        </form>
    )

};

const Contact = ({contactName}) => {
    return (
        <>
             <Text code> {contactName}</Text>
            {createField("contacts."+contactName,InputField, "",[],{type: "text"})}
         </>
    )
};

export default  reduxForm({form: 'editProfile'})(ProfileDetailsForm);
