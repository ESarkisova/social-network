import {authAPI, securityAPI} from "../DAL/api";
import {stopSubmit} from 'redux-form';

const prefix = (actionType) => "auth/" + actionType;

const SET_AUTH_USER = prefix('SET_AUTH_USER');
const DEL_AUTH_USER = prefix('DEL_AUTH_USER');
const SET_CAPTCHA = prefix('SET_CAPTCHA');
const SET_ERROR = prefix('SET_ERROR');

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captcha: null,
    isError: null
};
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {
                ...state,
                userId: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true,
                isError: null
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
        case SET_ERROR:
            return {
                ...state,
                isError: action.error
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

export const setError = (error) => ({
    type: SET_ERROR,
    error
});
export const delAuthUser = () => ({type: DEL_AUTH_USER});

export const setCaptcha = (captchaURL) => ({
    type: SET_CAPTCHA,
    captchaURL
});
export const authMe = () => {
    return (dispatch) => {
        return authAPI.getAuth()
            .then(response => response.data)
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    dispatch(setAuthUser(id, email, login));
                }
            })
            .catch( error => {dispatch(setError(error.message));}
            )
    };
};

export const setAuth = (loginData) => {
    return async (dispatch) => {
        const data = await authAPI.setAuth(loginData);

        if (data.resultCode === 0) {
            dispatch(authMe());
        } else {
            if (data.resultCode === 10) {
                dispatch(getCaptcha());
            }
            let action = stopSubmit('login', {_error: data.messages.join(', ')});
            dispatch(action);
        }


    };
};

export const getCaptcha = () => {
    return async (dispatch) => {
        const data = await securityAPI.getCaptcha();
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