import React, {component} from 'react';
import Profile from "./Profile";
import {
    getProfile,
    getStatus,
    onAddPost,
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

    componentWillUpdate(nextProps, nextState) {
        let userID = this.props.match.params.userID || this.props.authUser,
            userIDNext = nextProps.match.params.userID || nextProps.authUser;
        if (!userIDNext) {this.props.history.push('/login');}
        if (userIDNext && userIDNext != userID) {
            this.props.getProfile(userIDNext);
        }
    }

    render() {
        return <Profile {...this.props}/>
    }

}

let mapStateToProps = (state) => {
    return {
        newPost: state.profilePage.newPost,
        postList: state.profilePage.postList,
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authUser: state.auth.userId
    }
};


export default   compose(
    withRouter,
    connect(mapStateToProps, {onAddPost, getProfile, getStatus, setStatus}))(ProfileAPI);

