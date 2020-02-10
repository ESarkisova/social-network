import {profileAPI} from "../DAL/api";
import {reset, stopSubmit} from "redux-form";
import {errorToObject} from "../components/common/validate/helper";

const prefix = (actionType) => "profile/" + actionType;


const ADD_POST = prefix('ADD_POST'),
    SET_PROFILE_INFO = prefix('SET_PROFILE_INFO'),
    CHANGE_STATUS_TEXT = prefix('CHANGE_STATUS_TEXT'),
    CHANGE_AVATAR = prefix('CHANGE_AVATAR'),
    CHANGE_IS_LOADING_AVATAR = prefix('CHANGE_IS_LOADING_AVATAR'),
    CHANGE_SHOW_EDIT_PROFILE = prefix('CHANGE_SHOW_EDIT_PROFILE'),
    CHANGE_IS_SAVING_PROFILE = prefix('CHANGE_IS_SAVING_PROFILE');

let initialState = {
    postList: [
        {
            id: 1,
            likes: 1,
            text: "Hi post",
            img: null
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
    status: null,
    isLoadingAvatar: false,
    showEditProfile: false,
    isSavingProfile: false

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

        case CHANGE_AVATAR:

            return {
                ...state,
                profileInfo: {...state.profileInfo, photos: action.photos}
            };
        case CHANGE_IS_LOADING_AVATAR:

            return {
                ...state,
                isLoadingAvatar: action.isLoadingAvatar
            };

        case CHANGE_SHOW_EDIT_PROFILE:

            return {
                ...state,
                showEditProfile: action.showEditProfile
            };
        case CHANGE_IS_SAVING_PROFILE:

            return {
                ...state,
                isSavingProfile: action.isSavingProfile
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
export const changeAvatar = (photos) => ({
    type: CHANGE_AVATAR,
    photos
});
export const changeLoadingAvatar = (isLoadingAvatar) => ({
    type: CHANGE_IS_LOADING_AVATAR,
    isLoadingAvatar
});
export const changeShowEditProfile = (showEditProfile) => ({
    type: CHANGE_SHOW_EDIT_PROFILE,
    showEditProfile
});
export const changeIsSavingProfile = (isSavingProfile) => ({
    type: CHANGE_IS_SAVING_PROFILE,
    isSavingProfile
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


export const setAvatar = (img) => {
    return async (dispatch) => {
        dispatch(changeLoadingAvatar(true));
        const data = await profileAPI.setAvatar(img);
        if (data.resultCode === 0) {
            dispatch(changeAvatar(data.data.photos));
        }
        dispatch(changeLoadingAvatar(false));

    }
};
export const setProfile = (profile) => {
    return async (dispatch, getState) => {
        dispatch(changeIsSavingProfile(true));
        const data = await profileAPI.setProfile(profile);
        if (data.resultCode === 0) {
            dispatch(getProfile(getState().auth.userId));
            dispatch(changeShowEditProfile(false));
        } else {
            const errorsObject = errorToObject(profile, data.messages);


            let action = stopSubmit('editProfile', errorsObject);
            dispatch(action);
        }
        dispatch(changeIsSavingProfile(false));

    }
};



export default profileReducer;