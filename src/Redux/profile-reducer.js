import {profileAPI} from "../DAL/api";
import {reset} from "redux-form";

const prefix = (actionType) => "profile/" + actionType;

const ADD_POST = prefix('ADD_POST'),
    SET_PROFILE_INFO = prefix('SET_PROFILE_INFO'),
    CHANGE_STATUS_TEXT = prefix('CHANGE_STATUS_TEXT');

let initialState = {
    postList: [
        {
            id: 1,
            likes: 1,
            text: "Hi post",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
        },
        {
            id: 2,
            likes: 5,
            text: "Hi-hi post",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
        },
        {
            id: 3,
            likes: 6,
            text: "hi post!",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
        }
    ],
    profileInfo: null,
    status: null
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 88,
                likes: 0,
                text: action.newPostText,
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPW0HsI_bYceB2aH6y7h3tZuFJj3u0K-8HsbvlWpDU1SbY5-I"
            };
            return {
                ...state,
                postList: [...state.postList, newPost]
            };


        case SET_PROFILE_INFO:

            return {
                ...state,
                profileInfo: action.profile
            };
        case CHANGE_STATUS_TEXT:

            return {
                ...state,
                status: action.status
            };


        default:
            return state;
    }
};

export const sendPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
});

export const onAddPost = (newPostText) => {
    return (dispatch) => {
        dispatch(sendPost(newPostText));
        dispatch(reset('addPost'));
    };
};

export const setProfileInfo = (profile) => ({
    type: SET_PROFILE_INFO,
    profile
});

export const changeStatus = (status) => ({
    type: CHANGE_STATUS_TEXT,
    status
});

export const getProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getProfile(userId);
        dispatch(setProfileInfo(data));
    }
};
export const getStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileAPI.getStatus(userId);
        dispatch(changeStatus(data));
    }
};
export const setStatus = (status) => {
    return async (dispatch) => {
        const data = await profileAPI.setStatus(status);
        if (data.resultCode === 0) {
            dispatch(changeStatus(status));
        }

    }
};

export default profileReducer;