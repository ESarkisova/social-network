import {authMe} from "./auth-reducer";

const prefix = (actionType) => "app/" + actionType;

const INITIALIZATION_SUCCESS = prefix('INITIALIZATION_SUCCESS');

let initialState = {
    initialized: false
};

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZATION_SUCCESS:
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const setInitial = () => ({type: INITIALIZATION_SUCCESS});

export const initialization = () => {
    return async (dispatch) => {
        await dispatch(authMe());
        dispatch(setInitial());
    };
};

export default appReducer;