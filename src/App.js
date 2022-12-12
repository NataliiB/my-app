import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Nav';
<<<<<<< HEAD
import ProfileContainer from './components/Profile/ProfileContainer';
=======
import Profile from './components/Profile/Profile';
>>>>>>> f535ae7... Adding usersProfile page
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogesContainer from './components/Dialoges/DialogesContainer';
<<<<<<< HEAD
import UsersContainer from './components/UsersPage/UsersContainer';
=======
import UsersConnectApi from './components/UsersPage/UsersConnectApi';
import UsersProfileContainer from './components/UsersProfilePage/UsersProfileContainer';
>>>>>>> f535ae7... Adding usersProfile page



const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
        <Routes>
          <Route path='/profile' element={<ProfileContainer/>} />
          <Route path='/dialoges' element={<DialogesContainer/>} />
          <Route path='/news' element={<News/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/settings' element={<Settings/>}/>
<<<<<<< HEAD
          <Route path='/users' element={<UsersContainer/>}/>
=======
          <Route path='/users' element={<UsersConnectApi/>}/>
          <Route path='/usersProfile' element={<UsersProfileContainer/>}/>
>>>>>>> f535ae7... Adding usersProfile page
        </Routes>
        </div>
        
      </div>
  )
}

export default App;
