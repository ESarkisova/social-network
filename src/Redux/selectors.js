import { createSelector } from "reselect";

const getUsersSlc = (state) => {
    return state.usersPage.userList;
};
export const getPageSizeSlc = (state) => {
    return state.usersPage.pageSize;
};

export const getUsersRslc = createSelector(
    [getUsersSlc],
    (users) => ( users.map( (u) =>  u) )
);
export const getUserCountSlc = (state) => {
    return state.usersPage.userCount;
};
export const getCurrentPageSlc = (state) => {
    return state.usersPage.currentPage;
};
export const getIsLoadingSlc = (state) => {
    return state.usersPage.isLoading;
};
export const getIsFollowingSlc = (state) => {
    return state.usersPage.isFollowing;
};