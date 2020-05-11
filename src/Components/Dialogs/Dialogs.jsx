import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

  let path = "/dialogs/" + props.id;
  return (
    <div className={s.items +' ' + s.active}>
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

  let DialogElements = props.DialogData.map ( d => <DialogItem name={d.name} id={d.id}/>);
  let MessageElements = props.MessageData.map (m => <Message message={m.message}/>);

  return <div className={s.dialogs}>
    <div className={s.items}>
      {DialogElements}
      
    </div>
    <div className={s.messages}>
      {MessageElements}
    </div>

  </div>
}

export default Dialogs;