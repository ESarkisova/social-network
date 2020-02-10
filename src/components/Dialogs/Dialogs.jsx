import React from 'react';
import cn from './index.module.css';
import Dialog from "./Dialog/";
import Message from "./Message/";
import {reduxForm} from "redux-form";
import {createField, TextareaField} from "../common/FormComponents/FormComponents";
import {maxValueCreator, required} from "../common/validate/validate";
import {Button, Typography} from "antd";

const { Title } = Typography;

const maxLength50 = maxValueCreator(50);

let AddMessageForm = (props) => {
    return (
        <form onSubmit = {props.handleSubmit} className={cn.messageAdd}>
            {createField("newMessage", TextareaField, "Введите текст сообщения...",[required, maxLength50])}
            <div>
                <Button type={"primary"}>Добавить сообщение</Button>
            </div>
        </form>
    )
};

AddMessageForm = reduxForm({form: "addMessage"})(AddMessageForm);

const Dialogs = (props) => {
    let dialogElements = props.dialogList.map(({id, name, ava}) => <Dialog name={name} key = {id} id={id} ava={ava}/>);
    let messageElements = props.messageList.map(({id, text}) => <Message text={text} key = {id} id={id}/>);


    const onAddMessage = (formData) => {
        props.onAddMessage(formData.newMessage);
    };

    return (
        <div className={cn.dialogs__wrapper}>
            <div className={cn.dialogs__names}>
                <Title level={2}>Диалоги</Title>
                <div>
                    {
                        dialogElements
                    }
                </div>
            </div>
            <div className={cn.dialogs__messages}>
                <div className={cn.messageList}>
                    {
                        messageElements
                    }
                </div>
                <AddMessageForm onSubmit = {onAddMessage}/>

            </div>
        </div>
    );
};

export default Dialogs;
