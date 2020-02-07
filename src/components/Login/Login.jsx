import React from 'react';
import {reduxForm} from "redux-form";
import cn from './index.module.css';
import cnFormControl from '../common/FormComponents/index.module.css';
import {connect} from "react-redux";
import {getCaptcha, setAuth} from "../../Redux/auth-reducer";
import {createField, Input} from "../common/FormComponents/FormComponents";
import {required} from "../common/validate/validate";
import {Redirect} from "react-router-dom";
import refresh from "../../assets/refresh.svg";



let LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={cn.form_login}>
            {createField("email",Input, "Email",[required],{type: "email"})}
            {createField("password",Input, "Password",[required],{type: "password"})}
            <div>
                {createField("rememberMe","input",'',[],{type: "checkbox", id: "rememberMe"})}
                <label htmlFor="rememberMe">Запомнить меня</label>
            </div>
            {props.captcha &&
                <div>
                    <button type="button" onClick={props.getCaptcha}><img src={refresh} alt="refresh"/></button>
                    <img className={cn.captcha} src={props.captcha} alt="captcha" />
                    {createField("captcha",Input, "",[required],{type: "text"})}
                </div>
            }

            {props.error &&
            <ul className = {cnFormControl.errorMessage}>
                {props.error}
            </ul>
            }



            <button type="submit">Login</button>
        </form>
    )
};

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm);

let Login = (props) => {

    const onSubmit = (formData) => {
        props.setAuth(formData);
    };

    if (props.isAuth) {
        return <Redirect  to="/profile" />
    }

    return (
            <div className={cn.login__wrapp}>
                <h1>Введите, пожалуйста, логин и пароль</h1>
                <LoginFormRedux onSubmit={onSubmit} captcha = {props.captcha} getCaptcha={props.getCaptcha}/>
            </div>
        )


};

let mapStateToProps = (state) => {
    return ({
        login: state.auth.username,
        userId: state.auth.userId,
        captcha: state.auth.captcha,
        isAuth: state.auth.isAuth
    });
};


export default connect(mapStateToProps, {setAuth, getCaptcha})(Login);