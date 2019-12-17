import {userAPI} from "../DAL/api";

const prefix = (actionType) => "users/" + actionType;

const FOLLOW = prefix('FOLLOW'),
    SET_USER = prefix('SET_USER'),
    SET_CURRENT_PAGE = prefix('SET_CURRENT_PAGE'),
    SET_USER_COUNT = prefix('SET_USER_COUNT'),
    CHANGE_IS_LOADING = prefix('CHANGE_IS_LOADING'),
    CHANGE_IS_FOLLOWING = prefix('CHANGE_IS_FOLLOWING');

let initialState = {
    userList: [],
    pageSize: 5,
    userCount: 0,
    currentPage: 1,
    isLoading: false,
    isFollowing: []

};
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                userList: state.userList.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    } else return u;
                })
            };


        case SET_USER:

            return {
                ...state,
                userList: [...action.userList]
            };
        case SET_CURRENT_PAGE:

            return {
                ...state,
                currentPage: action.currentPage
            };
        case SET_USER_COUNT:

            return {
                ...state,
                userCount: action.userCount
            };

        case CHANGE_IS_LOADING:

            return {
                ...state,
                isLoading: action.isLoading
            };
        case CHANGE_IS_FOLLOWING:

            return {
                ...state,
                isFollowing: action.isFollowing ?
                    [...state.isFollowing, action.userId]
                    : state.isFollowing.filter(userId => (userId != action.userId))
            };

        default:
            return state;
    }
};

export const followSuccess = (userId) => ({
    type: FOLLOW,
    userId
});
export const setUsers = (userList) => ({
    type: SET_USER,
    userList
});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
});
export const setUserCount = (userCount) => ({
    type: SET_USER_COUNT,
    userCount
});
export const changeLoading = (isLoading) => ({
    type: CHANGE_IS_LOADING,
    isLoading
});
export const changeFollowing = (isFollowing, userId) => ({
    type: CHANGE_IS_FOLLOWING,
    isFollowing,
    userId
});
export const getUsers = (pageSize, currentPage) => {
    return async (dispatch) => {
        dispatch(changeLoading(true));
        const data = await userAPI.getUsers(pageSize, currentPage);
        dispatch(changeLoading(false));
        dispatch(setUsers(data.items));
        dispatch(setUserCount(data.totalCount));
    }
};
const followUnfollow = async (dispatch, apiMethod, userId) => {

    dispatch(changeFollowing(true, userId));
    const data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
    }
    dispatch(changeFollowing(false, userId));
};

export const follow = (userId) => {
    return (dispatch) => {
        const apiMethod = userAPI.follow.bind(userAPI);
        followUnfollow(dispatch, apiMethod, userId);
    }
};
export const unfollow = (userId) => {
    return (dispatch) => {
        const apiMethod = userAPI.unFollow.bind(userAPI);
        followUnfollow(dispatch, apiMethod, userId);
    }
};
export default usersReducer;