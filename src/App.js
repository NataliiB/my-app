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
import DialogesContainer from './components/Dialoges/DialogesContainer';
import UsersContainer from './components/UsersPage/UsersContainer';



const App = (props) => {
  
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/dialoges' element={<DialogesContainer/>} />
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/users' element={<UsersContainer/>}/>
        </Routes>
        </div>
        
      </div>
  )
}

export default App;
