import React from 'react';
import {onAddMessage} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => { return {
        dialogList: state.dialogsPage.dialogList,
        messageList: state.dialogsPage.messageList,
        newMessage: state.dialogsPage.newMessage,
}};



export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {onAddMessage}))(Dialogs);
