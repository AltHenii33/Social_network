import React, { createRef } from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/Dialog-reduser';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    DialogData: state.DialogPage.DialogData,
    MessageData: state.DialogPage.MessageData,
    NewMessageText: state.DialogPage.newMessageText
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onSendMessage: () => {
      dispatch(addMessageActionCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
