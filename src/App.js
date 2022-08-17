import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import Dialoges from './components/Dialoges/Dialoges';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav navFriends={props.appState.usersFriendsPage.friendsData}/>
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile profilePage={props.appState.profilePage} dispatch={props.dispatch}/>} />
          <Route path='/dialoges' element={<Dialoges dialogesGeneralData={props.appState.dialogesPage} dispatch={props.dispatch}/>} />
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
        </Routes>
        </div>
        
      </div>
  )
}

export default App;
