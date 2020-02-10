import React from "react";
import cn from "./index.module.css";
import {Field} from "redux-form";
import {Input} from "antd";

const FormComponentWithValidation = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className ={cn.formControl +" "+ (hasError ? cn.error : "")}>
            {props.children}
            { hasError && <span className = {cn.errorMessage}> {meta.error} </span>}
        </div>

    )
};

export const TextareaField = (props) => {
    const {input, ...restProps} = props;
    const { TextArea } = Input;
    return (

        <FormComponentWithValidation {...props}><TextArea rows={4} {...input}  {...restProps} /></FormComponentWithValidation>
    )
};

export const InputField = (props) => {
    const {input, ...restProps} = props;
    return (

        <FormComponentWithValidation {...props}><Input {...input} {...restProps} /> </FormComponentWithValidation>
    )

};

export const createField = (name, component, placeholder = "", validate = [], props) => {
    return <Field  name = {name}
                   placeholder = {placeholder}
                   component = {component}
                   validate = {validate}
                   {...props} />
};