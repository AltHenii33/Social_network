const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState ={
  MessageData: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Last times, i had cool bike' }
  ],
  DialogData: [
    { id: 1, name: 'Kolia', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' },
    { id: 2, name: 'Vasya', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' },
    { id: 3, name: 'KMarmelad', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' },
    { id: 4, name: 'Sonya', img: 'https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1' }
  ],
  newMessageText: 'hhay'
};

const dialogReduser = (state = initialState, action) => {

    if (action.type === SEND_MESSAGE) {
        let newMessage = {
          id: 4,
          message: state.newMessageText
        };
        state.MessageData.push(newMessage);
        state.newMessageText = '';
        
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
        
      }

return state;
}
export default dialogReduser;