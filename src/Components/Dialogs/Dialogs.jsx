import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/FormsControls';
import {required, maxLengthCreator} from '../../utils/Validators/Validator'
=======
>>>>>>> parent of 7fe2925... 78

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;
  return (
    <div className={s.items + ' ' + s.active}>
      <NavLink to={path}>{props.name} </NavLink>
    </div>
  )
}

const Message = (props) => {

  return (
    <div className={s.messages}>{props.message}</div>

  )
}

<<<<<<< HEAD
const maxLength20 = maxLengthCreator(20);

const addMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
        component={TextArea} 
        name='newMessageBody' 
        placeholder={'Enter your massage'} 
        validate = {[required, maxLength20]}/>
      </div>
      <div>
      <button >Add Message</button>
      </div>
    </form>
  )
}

const MessageReduxForm = reduxForm({form:'dialogAddMessageForm'})(addMessageForm)

const Dialogs = (props) => {

  const addNewMessage =(values) => {
    props.addMessageActionCreator(values.newMessageBody);
    values.newMessageBody = '';
}

=======
const Dialogs = (props) => {

>>>>>>> parent of 7fe2925... 78
  let DialogElements = props.DialogData.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img} />);
  let MessageElements = props.MessageData.map(m => <Message message={m.message}  key={m.id}/>);

  let NewMessageElement = React.createRef();

  let addMessage = () => {
    props.addMessageActionCreator();
  }
  let onMessageChange = () => {
    let text = NewMessageElement.current.value;
    props.updateNewMessageTextActionCreator(text);
  }
  return <div className={s.dialogs}>
    <div className={s.items}>
      {DialogElements}

    </div>
    <div className={s.messages}>
      {MessageElements}
      <textarea
        ref={NewMessageElement}
        onChange={onMessageChange}
        value={props.NewMessageText}
      ></textarea>
      <button onClick={addMessage}>Add Post</button>
    </div>

  </div>
}

export default Dialogs;