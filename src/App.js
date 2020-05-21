import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';
import { Route } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/Dialogs' render={() => <DialogsContainer />} />
        <Route path='/Profile' render={() => <Profile />} />
        <Route path='/News' component={News} />
        <Route path='/Music' component={Music} />
        <Route path='/Users' render={() => <UsersContainer />} />
        <Route path='/Settings' component={Settings} />
      </div>
    </div>
  );


}




export default App;
