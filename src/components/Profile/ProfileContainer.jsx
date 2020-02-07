import React, {component} from 'react';
import Profile from "./Profile";
import {
    changeShowEditProfile,
    getProfile,
    getStatus,
    onAddPost, setAvatar, setProfile,
    setStatus
} from "../../Redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
class ProfileAPI extends React.Component {
    componentDidMount() {

        let userID = this.props.match.params.userID || this.props.authUser;

        if (userID) {
            this.props.getProfile(userID);
            this.props.getStatus(userID);
        } else {
            this.props.history.push('/login');
        }
    }

    componentDidUpdate(prevProps, prevState) {
        let userID = this.props.match.params.userID || this.props.authUser,
            userIDPrev = prevProps.match.params.userID || prevProps.authUser;
        if (!userID) {this.props.history.push('/login');}
        if (userID !== userIDPrev ) {
            this.props.getProfile(userID);
            this.props.getStatus(userID);
        }
    }

    render() {
        return <Profile {...this.props} isOwner={this.props.authUser && ((+this.props.authUser === +this.props.match.params.userID) || !this.props.match.params.userID)}/>
    }

}

let mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost,
        postList: state.profilePage.postList,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authUser: state.auth.userId,
        isLoadingAvatar: state.profilePage.isLoadingAvatar,
        showEditProfile: state.profilePage.showEditProfile,
        isSavingProfile: state.profilePage.isSavingProfile,
    }
};


export default   compose(
    withRouter,
    connect(mapStateToProps, {onAddPost, getProfile, getStatus, setStatus, setAvatar, setProfile, changeShowEditProfile}))(ProfileAPI);

