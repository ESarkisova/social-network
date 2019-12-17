import React from 'react';
import {
    follow, unfollow,  setCurrentPage, getUsers
} from "../../Redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import {
    getCurrentPageSlc,
    getIsFollowingSlc,
    getIsLoadingSlc,
    getPageSizeSlc,
    getUserCountSlc,
    getUsersRslc
} from "../../Redux/selectors";

class UserAPI extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage);
    }

    setPage = (pageNum) => {
        this.props.getUsers(this.props.pageSize, pageNum);
        this.props.setCurrentPage(pageNum);
    };

    render() {
        return <Users {...this.props} setPage = {this.setPage}/>
    }
}

let mapStateToProps = (state) => { return {
    userList: getUsersRslc(state),
    pageSize: getPageSizeSlc(state),
    userCount: getUserCountSlc(state),
    currentPage: getCurrentPageSlc(state),
    isLoading: getIsLoadingSlc(state),
    isFollowing: getIsFollowingSlc(state)
}};


const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers})(UserAPI);

export default UsersContainer;