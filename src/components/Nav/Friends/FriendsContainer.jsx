import React from 'react';
import Friends from "./Friends";
import {connect} from "react-redux";

let mapStateToProps = (state) => {return {
    friendList: state.sidebar.friendList
}};


const FriendsContainer = connect(mapStateToProps, {})(Friends);

export default FriendsContainer;
