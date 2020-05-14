import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';

const App = (props) => {
  console.log ('log= ' ,props.newMessageText);
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Dialogs' render={() => <Dialogs
            MessageData={props.state.DialogPage.MessageData}
            DialogData={props.state.DialogPage.DialogData}
            newMessageText={props.state.DialogPage.newMessageText}
            dispatch={props.dispatch} 
            />} />
          <Route path='/Profile' render={() => <Profile 
          PostData={props.state.ProfilePage.PostData} 
          dispatch={props.dispatch}
          newPostText={props.state.ProfilePage.newPostText}
          // updateNewPostText={props.updateNewPostText}
          />} />
          <Route path='/News' component={News} />
          <Route path='/Music' component={Music} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );


}




export default App;
