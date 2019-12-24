import React from "react";
import {createField, Input, Textarea} from "../../../common/FormComponents/FormComponents";
import cnFormControl from "../../../common/FormComponents/index.module.css";
import {reduxForm} from "redux-form";
import cn from "../index.module.css";
import {required} from "../../../common/validate/validate";

const ProfileDetailsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={props.isSavingProfile ? cn.loading : ''}>
            <div className={cn.fieldWrap}>
                <b>Полное имя: </b>
                {createField("fullName",Input, "Введите имя...",[required],{type: "text"})}</div>
            <div className={cn.fieldWrap}>
                <b>Обо мне: </b>
                {createField("aboutMe",Textarea, "Напишите кратко о себе...",[required],)}</div>
            <div className={cn.fieldWrap}>
                <b>Ищу работу: </b>
                {createField("lookingForAJob",Input, "",[],{type: "checkbox"})}</div>
            <div className={cn.fieldWrap}>
                <b>Ищу работу - описание: </b>
                {createField("lookingForAJobDescription",Textarea, "Укажите профессиональные навыки...",[required],)}</div>
            <b>Контакты: </b><br/>
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

            <hr/>

            <button className={cn.detailsEditButton}>Сохранить</button>
        </form>
    )

};

const Contact = ({contactName}) => {
    return (
        <>
            <b>Ссылка на: {contactName} </b>
            {createField("contacts."+contactName,Input, "",[],{type: "text"})}
         </>
    )
};

export default  reduxForm({form: 'editProfile'})(ProfileDetailsForm);
