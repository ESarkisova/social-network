import React from "react";
import cn from "./index.module.css";
import {Field} from "redux-form";

const FormComponentWithValidation = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className ={cn.formControl +" "+ (hasError ? cn.error : "")}>
            {props.children}
            { hasError && <span className = {cn.errorMessage}> {meta.error} </span>}
        </div>

    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (

        <FormComponentWithValidation {...props}> <textarea {...input}  {...restProps} /> </FormComponentWithValidation>
    )
};

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (

        <FormComponentWithValidation {...props}><input {...input} {...restProps} /> </FormComponentWithValidation>
    )

};

export const createField = (name, component, placeholder = "", validate = [], props) => {
    return <Field  name = {name}
                   placeholder = {placeholder}
                   component = {component}
                   validate = {validate}
                   {...props}></Field>
};