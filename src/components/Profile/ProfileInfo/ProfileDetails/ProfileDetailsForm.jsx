import React from "react";
import {createField, Input, Textarea} from "../../../common/FormComponents/FormComponents";
import cnFormControl from "../../../common/FormComponents/index.module.css";
import {reduxForm} from "redux-form";
import cn from "../index.module.css";
import {required} from "../../../common/validate/validate";

const ProfileDetailsForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={props.isSavingProfile ? cn.loading : ''}>
            <b>Полное имя: </b>
            {createField("fullName",Input, "Введите имя...",[required],{type: "text"})}
            <b>Обо мне: </b>
            {createField("aboutMe",Textarea, "Напишите кратко о себе...",[required],)}
            <b>Ищу работу: </b>
            {createField("lookingForAJob",Input, "",[],{type: "checkbox"})}
            <b>Ищу работу - описание: </b>
            {createField("lookingForAJobDescription",Textarea, "Укажите профессиональные навыки...",[],)}
            <b>Контакты: </b><br/>
            {Object.keys(props.profileInfo.contacts).map((key) => {
                return <Contact key = {key} contactName = {key} />
            })}

            {props.error &&
            <ul className = {cnFormControl.errorMessage}>
                {props.error}
            </ul>
            }

            <hr/>

            <button>Сохранить</button>
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
