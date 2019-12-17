import {authAPI} from "../DAL/api";
import {stopSubmit} from 'redux-form';

const prefix = (actionType) => "auth/" + actionType;

const SET_AUTH_USER = prefix('SET_AUTH_USER');
const DEL_AUTH_USER = prefix('DEL_AUTH_USER');
const SET_CAPTCHA = prefix('SET_CAPTCHA');

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            };

        case DEL_AUTH_USER:
            return {
                ...state,
                userId: null,
                email: null,
                login: null,
                isAuth: false
            };
        case SET_CAPTCHA:
            return {
                ...state,
                captcha: action.captchaURL
            };
        default:
            return state;
    }
};

export const setAuthUser = (userId, email, login) => ({
    type: SET_AUTH_USER,
    userId,
    email,
    login
});
export const delAuthUser = () => ({type: DEL_AUTH_USER});

export const setCaptcha = (captchaURL) => ({
    type: SET_CAPTCHA,
    captchaURL
});
export const authMe = () => {
    return (dispatch) => {
        return authAPI.getAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUser(id, email, login));
                }
            })
    };
};

export const setAuth = (loginData) => {
    return async (dispatch) => {
        const data = await authAPI.setAuth(loginData);

        if (data.resultCode === 0) {
            dispatch(authMe());
        } else if (data.resultCode === 10) {
            dispatch(getCaptcha());
        } else {
            let action = stopSubmit('login', {_error: data.messages.join(', ')});
            dispatch(action);
        }


    };
};

export const getCaptcha = () => {
    return async (dispatch) => {
        const data = await authAPI.getCaptcha();
        dispatch(setCaptcha(data.url));
    };
};

export const delAuth = () => {
    return async (dispatch) => {
        const data = await authAPI.delAuth();
        if (data.resultCode === 0) {
            dispatch(delAuthUser());
        }
    };

};

export default authReducer;