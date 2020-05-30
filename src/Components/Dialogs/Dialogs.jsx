import React, { createRef } from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

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

const Dialogs = (props) => {

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